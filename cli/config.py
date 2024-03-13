from dotenv import load_dotenv
from os import environ

load_dotenv()

class Environment():
    """
    Create an environment object to store environment variables
    """
    DB_LINK = environ.get('DB_LINK')
    DB_NAME = environ.get('DB_NAME')

env = Environment()