from flask_restx import Namespace, Resource, fields
from models import User, Admin, Contestant
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask import request

user_ns = Namespace('user', description="A namespace for Users")

user_model = user_ns.model(
    "User",
    {
        "id": fields.Integer(),
        "username": fields.String(),
        "email": fields.String(),
        "password": fields.String(),
        "first_name": fields.String(),
        "last_name": fields.String(),
        "role": fields.String()
    },
)


@user_ns.route("/users")
class UsersResource(Resource):
    @user_ns.marshal_list_with(user_model)
    def get(self):
        """Get all Users"""

        users = User.query.all()

        return users


@user_ns.route("/user")
class CurrentUserResource(Resource):
    @user_ns.marshal_with(user_model)
    def get(self):
        """Get current user"""

        current_user_id = get_jwt_identity()

        current_user = User.query.get_or_404(current_user_id)

        return current_user


@user_ns.route("/user/<int:id>")
class UserResource(Resource):
    @user_ns.marshal_with(user_model)
    def get(self, id):
        """Get a user by id"""

        user = User.query.get_or_404(id)

        return user

    @user_ns.marshal_with(user_model)
    def put(self, id):
        """Update a user by id"""

        user_to_update = User.query.get_or_404(id)

        data = request.get_json()

        user_to_update.update(data)

        return user_to_update

    @user_ns.marshal_with(user_model)
    def delete(self, id):
        """Delete a user by id"""

        user_to_delete = User.query.get_or_404(id)
        user_to_delete.delete()

        return user_to_delete
