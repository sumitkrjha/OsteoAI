import os
import numpy
import cv2
from ultralytics import YOLO
from util import create_image


def preprocess_tumor(image):
    """
    Preprocess an image for tumor prediction.

    Args:
        image (numpy.ndarray): The input image to preprocess.

    Returns:
        numpy.ndarray: The preprocessed image, resized to 256x256 and converted to RGB format.
    """

    # image = cv2.imread(image)
    try:
        image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    except:
        pass
    image = cv2.resize(image, (256, 256))
    image = numpy.array(image)
    return image


def preprocess_fracture(image):
    """
    Preprocesses an image for fracture detection.

    Args:
        image (numpy.ndarray): The input image to be preprocessed.

    Returns:
        numpy.ndarray: The preprocessed image, resized to 640x640 pixels and converted to RGB format.
    """

    # image = cv2.imread(image)
    try:
        image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    except:
        pass
    image = cv2.resize(image, (640, 640))
    image = numpy.array(image)
    return image


def predict_tumor(image):
    """
    Predicts the presence of a tumor in the given image and returns the image with the detected tumor bounding boxes, along with a boolean indicating whether a tumor was detected.

    Args:
        image (numpy.ndarray): The input image to analyze.

    Returns:
        tuple: A tuple containing the following:
            - img (numpy.ndarray): The input image with the detected tumor bounding boxes drawn on it.
            - detected (bool): True if a tumor was detected, False otherwise.
    """

    model = YOLO("./models/Tumor.pt")
    results = model([image], conf=0.5)
    for result in results:
        boxes = result.boxes
        if len(boxes) > 0:
            detected = True
        else:
            detected = False
        img = create_image(image, boxes)
        return img, detected


def predict_fracture(image):
    """
    Predicts the presence of a fracture in the given image and returns the image with the detected fracture bounding boxes, along with a boolean indicating whether a fracture was detected.

    Args:
        image (numpy.ndarray): The input image to analyze.

    Returns:
        tuple: A tuple containing the following:
            - img (numpy.ndarray): The input image with the detected fracture bounding boxes drawn on it.
            - detected (bool): True if a fracture was detected, False otherwise.
    """

    model = YOLO("./models/Fracture.pt")
    results = model([image], conf=0.4)
    for result in results:
        boxes = result.boxes
        if len(boxes) > 0:
            detected = True
        else:
            detected = False
        img = create_image(image, boxes)
        return img, detected
