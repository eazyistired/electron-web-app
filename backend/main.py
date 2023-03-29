from flask import Flask
from flask_restx import Api
from exts import db
from models import User, Team
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from auth import auth_ns
from users import user_ns
from teams import team_ns
from flask_cors import CORS


def create_app(config):
    app = Flask(__name__)
    app.config.from_object(config)

    CORS(app)

    db.init_app(app)

    # app.app_context().push()
    # db.create_all()

    migrate = Migrate(app, db)
    JWTManager(app)

    api = Api(app, doc="/docs")

    api.add_namespace(auth_ns)
    api.add_namespace(user_ns)
    api.add_namespace(team_ns)

    @app.route("/")
    def index():
        return app.send_static_file("index.html")

    @app.errorhandler(404)
    def not_found(err):
        return app.send_static_file("index.html")

    # model (serializer)
    @app.shell_context_processor
    def make_shell_context():
        return {"db": db, "user": User, "team": Team}

    return app
