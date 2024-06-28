import psycopg2

class Connector:
    def __init__(self):
        pass
    

    # Establishes a connection to a PostgreSQL database 
    def connector(self):
        conn=psycopg2.connect(host="localhost",port="5432",dbname="Sales_Project",password="root",user="postgres")
        return conn