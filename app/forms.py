from flask_wtf import FlaskForm
from wtforms.validators import InputRequired
from wtforms import TextAreaField
from flask_wtf import FileField, FileRequired, FileAllowed

class UploadForm(Form):
    description = TextAreaField('Description', validators=[InputRequired()])
    photo = FileField('Photo', validators=[FileRequired(), FileAllowed(['jpg', 'png'], 'Images only!')])