import os
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


MATHPIX_CONFIC = {
   "MATHPIX_APP_ID": os.environ["MATHPIX_APP_ID"],
   "MATHPIX_SECRET_KEY": os.environ["MATHPIX_SECRET_KEY"],
}


MONGODB_CONFIG = {
    "MONGODB_FQDN": os.environ["MONGODB_FQDN"],
    "MONGODB_USERNAME": os.environ["MONGODB_USERNAME"],
    "MONGODB_PASSWORD": os.environ["MONGODB_PASSWORD"],
}

MONGODB_CLIENT = MongoClient(
    f"mongodb+srv://{MONGODB_CONFIG['MONGODB_USERNAME']}:{MONGODB_CONFIG['MONGODB_PASSWORD']}@{MONGODB_CONFIG['MONGODB_FQDN']}/?retryWrites=true&w=majority",
    server_api=ServerApi('1'),
)

try:
    MONGODB_CLIENT.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)
