cmake_minimum_required(VERSION 3.6)
project(SimUDuck)

set(CMAKE_CXX_STANDARD 14)

set(SOURCE_FILES SimUDuck.cpp)

add_executable(SimUDuck ${SOURCE_FILES})