import os
import numpy
import cv2
from ultralytics import YOLO


def preprocess_tumor(image):
    # image = cv2.imread(image)
    try:
        image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    except:
        pass
    image = cv2.resize(image, (256, 256))
    image = numpy.array(image)
    return image


def preprocess_fracture(image):
    # image = cv2.imread(image)
    try:
        image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    except:
        pass
    image = cv2.resize(image, (640, 640))
    image = numpy.array(image)
    return image


def predict_tumor(image):
    model = YOLO("./models/Tumor.pt")
    results = model([image], conf=0.5)
    for result in results:
        boxes = result.boxes
        if len(boxes) > 0:
            detected = True
        else:
            detected = False
        result.save(filename="result.jpg")
        return detected


def predict_fracture(image):
    model = YOLO("./models/Fracture.pt")
    results = model([image], conf=0.4)
    for result in results:
        boxes = result.boxes
        if len(boxes) > 0:
            detected = True
        else:
            detected = False
        result.save(filename="result.jpg")
        return detected
