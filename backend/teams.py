from flask_restx import Namespace, Resource, fields
from models import Team, User
from users import user_model
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask import request

team_ns = Namespace('team', description="A namespace for Teams")

team_model = team_ns.model(
    "Team",
    {
        "id": fields.Integer(),
        "name": fields.String(),
    }
)

team_display_model = team_ns.model(
    "Team",
    {
        "id": fields.Integer(),
        "name": fields.String(),
        "team_members": fields.List(fields.Nested(user_model))
    }
)


@team_ns.route("/teams")
class TeamsResource(Resource):
    @team_ns.marshal_list_with(team_display_model)
    def get(self):
        """Get all Teams"""

        teams = Team.query.all()

        return teams

    @team_ns.marshal_with(team_model)
    @team_ns.expect(team_model)
    def post(self):
        """Create a new team"""

        data = request.get_json()
        new_team_members = data.get("team_members")

        new_team = Team(name=data.get("name"))
        if new_team_members:
            for pair in new_team_members:
                new_team_member = pair["value"]
                new_member = User.query.get_or_404(new_team_member.get("id"))
                new_team.members.append(new_member)

        new_team.save()
        return new_team, 201


@team_ns.route("/team/<int:id>")
class TeamResource(Resource):
    @team_ns.marshal_with(team_model)
    def put(self, id):
        """Update a team by id"""
        data = request.get_json()

        team_to_update = Team.query.get_or_404(id)
        new_team_members = data.get("team_members")

        team_to_update.members.clear()

        for pair in new_team_members:
            new_team_member = pair["value"]
            new_member = User.query.get_or_404(new_team_member.get("id"))

            team_to_update.memebrs.append(new_member)

        team_to_update.update(data)

        return team_to_update

    @ team_ns.marshal_with(team_model)
    def delete(self, id):
        """Delete a team by id"""

        team_to_delete = Team.query.get_or_404(id)
        team_to_delete.delete()

        return team_to_delete
