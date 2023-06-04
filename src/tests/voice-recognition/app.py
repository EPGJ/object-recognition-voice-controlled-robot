from google.cloud import speech
from voice import VoiceRecorder

"""
# Instantiates a client


# The name of the audio file to transcribe
gcs_uri = "gs://cloud-samples-data/speech/brooklyn_bridge.raw"
"""
def transcribe_speech(client: speech.SpeechClient, recorder: VoiceRecorder, recording_path: str):
  with open(recording_path, "rb") as recording_file:
     recording_bytes = recording_file.read()

  audio = speech.RecognitionAudio(content=recording_bytes)

  config = speech.RecognitionConfig(
      encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
      sample_rate_hertz=recorder.sampling_frequency,
      language_code="en-US",
      audio_channel_count=2
  )

  # Detects speech in the audio file
  response = client.recognize(config=config, audio=audio)

  for result in response.results:
    print("Transcript: {}".format(result.alternatives[0].transcript))

def main():
    client = speech.SpeechClient() # Google Speech Client
    recorder = VoiceRecorder()
    recording_path = recorder.record()

    transcribe_speech(client, recorder, recording_path)

if __name__ == "__main__":
    main()