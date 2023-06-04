import os
import time
import sounddevice
from scipy.io import wavfile
import wavio as wv
import base64
from typing import Tuple

class VoiceRecorder():
    def __init__(self, recordings_path: str = './voice_cache'):
        os.makedirs(recordings_path, exist_ok=True)
        self.recordings_path = recordings_path
        self.sampling_frequency = 44100 # Hertz
        self.recording_duration = 5 # Seconds


    def record(self) -> Tuple[str, str]:
        """
        Returns: Tuple[The path of the recorded voice file, BASE64 encoded audio]
        """
        recording_time = time.time()
        recording_string = f'{self.recordings_path}/{int(recording_time)}.wav'

        print("Say something!")
        recording = sounddevice.rec(int(self.recording_duration * self.sampling_frequency),
                                    samplerate=self.sampling_frequency, channels=2)
        sounddevice.wait()
        print("Recording finished")

        wavfile.write(recording_string, self.sampling_frequency, recording)        
        return recording_string
