FROM ubuntu:latest

ARG DEBIAN_FRONTEND=noninteractive
RUN apt update
RUN apt install -y build-essential python3 python3-dev python3-pip git cmake \
    ffmpeg libsm6 libxext6 libopencv-dev

WORKDIR /app

# Compiling OpenCV
ENV OpenCV_VERSION=4.x
RUN git clone https://github.com/opencv/opencv.git -b ${OpenCV_VERSION} --depth 1
RUN cd opencv && mkdir build && cd build && cmake -D CMAKE_BUILD_TYPE=RELEASE \
    -D CMAKE_INSTALL_PREFIX=/usr/local \
    -D OPENCV_GENERATE_PKGCONFIG=ON \
    -D BUILD_EXAMPLES=OFF \
    -D INSTALL_PYTHON_EXAMPLES=OFF \
    -D INSTALL_C_EXAMPLES=OFF \
    -D PYTHON_EXECUTABLE=$(which python2) \
    -D BUILD_opencv_python2=OFF \
    -D PYTHON3_EXECUTABLE=$(which python3) \
    -D PYTHON3_INCLUDE_DIR=$(python3 -c "from distutils.sysconfig import get_python_inc; print(get_python_inc())") \
    -D PYTHON3_PACKAGES_PATH=$(python3 -c "from distutils.sysconfig import get_python_lib; print(get_python_lib())") \
    .. && make -j7
ENV OpenCV_DIR=/app/opencv/build
RUN export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/app/opencv/build/lib

# Compiling Darknet
RUN git clone https://github.com/AlexeyAB/darknet.git
RUN mkdir darknet/build_release/ && cd darknet/build_release/ \
    && cmake -DENABLE_CUDA=OFF .. \
    && cmake --build . --target install --parallel 8

COPY . /app/.
RUN python3 -m pip install -r requirements.txt

EXPOSE 65431
EXPOSE 65432

CMD python3 main.py