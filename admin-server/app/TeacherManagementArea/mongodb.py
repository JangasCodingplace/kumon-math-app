from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from django.conf import settings

mongodb_client = MongoClient(
    f"mongodb+srv://{settings.MONGODB['username']}:{settings.MONGODB['password']}@{settings.MONGODB['fqdn']}/?retryWrites=true&w=majority",
    server_api=ServerApi('1'),
)

mongodb_client.admin.command('ping')
print("Pinged your deployment. You successfully connected to MongoDB!")
