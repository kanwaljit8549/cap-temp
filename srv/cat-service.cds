using {cap.temp as db } from '../db/schema';

service BookStore @(requires : ['authenticated-user','UserRole']) {

    entity Books as projection on db.Books;
}

