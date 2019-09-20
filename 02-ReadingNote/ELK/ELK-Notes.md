# ELK Notes

## 2019.7.26

```json
GET _search
{
  "query": {
    "match_all": {}
  }
}

GET _all

PUT /megacorp/employee/1
{
    "first_name" : "John",
    "last_name" :  "Smith",
    "age" :        25,
    "about" :      "I love to go rock climbing",
    "interests": [ "sports", "music" ]
}

GET /megacorp/employee/1

PUT /esign/signlist/2
{
  "fileid": "fileid2",
  "filefold": "d:\fileid2.pdf",
  "input_date": "2019-3-4 12:00:00 AM"
}

PUT /esign/signlist/3
{
  "fileid": "fileid3",
  "filefold": "d:\fileid3.pdf",
  "input_date": "2019-3-4 12:00:00 AM"
}

PUT /esign/signlist/4
{
  "fileid": "fileid4",
  "filefold": "d:\fileid4.pdf",
  "input_date": "2019-3-5 12:00:00 AM"
}

PUT /esign/signlist/
{
  "fileid": "fileid6",
  "filefold": "d:\fileid6.pdf",
  "input_date": "2019-3-5 12:00:00 AM"
}

GET /esign/signlist/1

GET /esign/signlist/_search

GET /esign/signlist/_search

GET /esign/signlist/_search?q=fileid:fileid1

PUT /esign/signlist/10
{
  "fileid": "fileid10",
  "filefold": "d:\fileid10.pdf",
  "input_date": "2019-3-5 12:00:00 AM",
  "parent_t": "something will be happen!"
}

GET /esign/signlist/10

DELETE /esign/signlist/10

GET /esign/signlist/12
```

```json

DELETE /my_index 

PUT /my_index
{ "settings": { "number_of_shards": 1 }} 

POST /my_index/my_type/_bulk
{ "index": { "_id": 1 }}
{ "title": "The quick brown fox" }
{ "index": { "_id": 2 }}
{ "title": "The quick brown fox jumps over the lazy dog" }
{ "index": { "_id": 3 }}
{ "title": "The quick brown fox jumps over the quick dog" }
{ "index": { "_id": 4 }}
{ "title": "Brown fox brown dog" }

```
