import re
import base64
import numpy as np
import cv2
from PIL import Image
from io import BytesIO


def base64_to_pil(img_base64):
    """
    Convert a base64-encoded image string to a PIL Image object.

    Args:
        img_base64 (str): A base64-encoded image string.

    Returns:
        PIL.Image.Image: A PIL Image object representing the decoded image.
    """
    image_data = re.sub("^data:image/.+;base64,", "", img_base64)
    pil_image = Image.open(BytesIO(base64.b64decode(image_data)))
    return pil_image


def np_to_base64(img_np):
    """
    Converts a NumPy array representing an image to a base64-encoded string that can be used as a data URI.

    Args:
        img_np (numpy.ndarray): A NumPy array representing an image.

    Returns:
        str: A base64-encoded string that can be used as a data URI for the image.
    """
    img = Image.fromarray(img_np.astype("uint8"), "RGB")
    buffered = BytesIO()
    img.save(buffered, format="PNG")
    return "data:image/png;base64," + base64.b64encode(buffered.getvalue()).decode(
        "ascii"
    )


def img_to_np(img_path):
    """
    Reads an image from the specified file path and returns it as a NumPy array.

    Args:
        img_path (str): The file path of the image to be read.

    Returns:
        numpy.ndarray: The image data as a NumPy array.
    """
    img = cv2.imread(img_path)
    return np.asarray(img)


def create_image(img, bbox):
    """
    Create a new image with a bounding box drawn on it.

    Args:
        img (numpy.ndarray): The input image as a NumPy array.
        bbox (tuple): A tuple of (x1, y1, x2, y2) coordinates representing the bounding box.

    Returns:
        numpy.ndarray: The input image with a bounding box drawn on it.
    """
    xyxy_tensor = bbox.xyxy
    conf_tensor = bbox.conf

    for xyxy, conf in zip(xyxy_tensor, conf_tensor):
        x1, y1, x2, y2 = xyxy.tolist()
        confidence = conf.item()
        cv2.rectangle(img, (int(x1), int(y1)), (int(x2), int(y2)), (30, 16, 166), 2)
        cv2.putText(
            img,
            f"Conf: {confidence:.2f}",
            (int(x1), int(y1 - 10)),
            cv2.FONT_HERSHEY_SIMPLEX,
            0.5,
            (30, 16, 166),
            2,
        )

    # cv2.imshow("Image with Bounding Boxes", img)
    # cv2.waitKey(0)
    # cv2.destroyAllWindows()
    img = cv2.resize(img, (256, 256))
    return img
