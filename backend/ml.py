import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from app import db
print("a")
sinfun=db['user'].sin
cursor = sinfun.find()
entries = list(cursor)
entries[:5]
df = pd.DataFrame(entries)
print(df.head())
db1=df
db1['mix']=db1['name']+" " +db1['location']+" " +db1['brand']+ " " +db1['color']+ " " +db1['description']
new=db1.drop(columns=['location','brand','color','description'])
new=new.reset_index()
new.rename(columns={'index':'obj_id'},inplace=True)
cv = CountVectorizer(max_features=5000,stop_words='english')
vector = cv.fit_transform(new["mix"]).toarray()

similarity = cosine_similarity(vector)

def recommend(movie):
    index = new[new['name'] == movie].index[0]
    distances = sorted(list(enumerate(similarity[index])),reverse=True,key = lambda x: x[1])
    for i in distances[1:10]:
        print(new.iloc[i[0]])

recommend('wallet')
# print(type(db))
# dbx=pd.read_json("db['users']")
# dbx.head()