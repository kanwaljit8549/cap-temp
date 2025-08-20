using {cap.temp as db } from '../db/schema';

service BookStore {
    entity Books as projection on db.Books;
}

