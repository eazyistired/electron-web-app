from exts import db

"""
class User:
    id: int
    username: string
    email: string
    password: string
    first_name: string
    last_name: string
    role: string
    team_id: int
"""


class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(25), nullable=False, unique=True)
    email = db.Column(db.String(80), nullable=False)
    password = db.Column(db.Text(), nullable=False)
    first_name = db.Column(db.String(70), nullable=False)
    last_name = db.Column(db.String(70), nullable=False)
    role = db.Column(db.String(10), nullable=False)

    team_id = db.Column(db.Integer, db.ForeignKey('teams.id'), nullable=False)

    __mapper_args__ = {
        "polymorphic_identity": "user",
        "polymorphic_on": role
    }

    def __repr__(self):
        """
        returns string rep of object

        """
        return f"<User {self.username}>"

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def updateModifiedData(self):
        db.session.commit()

    def update(self, data):
        self.username = data.get("username")
        self.email = data.get("email")
        self.first_name = data.get("first_name")
        self.last_name = data.get("last_name")
        self.role = data.get("role")

        db.session.commit()


class Admin(User):
    __tablename__ = "admins"
    id = db.Column(None, db.ForeignKey('users.id'), primary_key=True)

    __mapper_args__ = {
        "polymorphic_identity": "admin",
    }

    def __repr__(self):
        """
        returns string rep of object

        """
        return f"<User {self.username}>"


class Contestant(User):
    __tablename__ = "contestants"
    id = db.Column(None, db.ForeignKey('users.id'), primary_key=True)

    __mapper_args__ = {
        "polymorphic_identity": "contestant",
    }

    def __repr__(self):
        """
        returns string rep of object

        """
        return f"<User {self.username}>"


"""
class Team:
    id: int
    name: string
    members: list of Users
"""


class Team(db.Model):
    __tablename__ = 'teams'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    members = db.relationship('User', backref='team', lazy=True)

    def __repr__(self):
        """
        returns string rep of object

        """
        return f"<User {self.name}>"

    def update(self, data):
        self.name = data.get("name")

        db.session.commit()

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
