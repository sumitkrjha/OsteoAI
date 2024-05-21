from predictyolo import (
    preprocess_tumor,
    preprocess_fracture,
    predict_tumor,
    predict_fracture,
)
import os
import numpy as np
from flask import (
    Flask,
    redirect,
    url_for,
    request,
    render_template,
    Response,
    jsonify,
    redirect,
)
from util import base64_to_pil, np_to_base64, img_to_np
from flask_cors import CORS
import cv2
import json

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def index():
    return "flask is running"


@app.route("/predicttumor", methods=["GET", "POST"])
def predtumor():
    if request.method == "POST":
        img = base64_to_pil(request.json)
        img = np.array(img)
        img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
        img = preprocess_tumor(img)
        img_box, pred = predict_tumor(img)
        try:
            json_img = np_to_base64(img_box)
        except:
            print("Kuch toh masla hai")
        return jsonify(result=[pred, json_img])
    return render_template("index.html")


@app.route("/predictfracture", methods=["GET", "POST"])
def predfracture():
    if request.method == "POST":
        img = base64_to_pil(request.json)
        img = np.array(img)
        img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
        img = preprocess_fracture(img)
        img_box, pred = predict_fracture(img)
        try:
            json_img = np_to_base64(img_box)
        except:
            print("Kuch toh masla hai")
        return jsonify(result=[pred, json_img])
    return render_template("index.html")


if __name__ == "__main__":
    app.run(port=0.0.0.0)
