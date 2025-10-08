BEGIN;

DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS event_user;
DROP TABLE IF EXISTS event;
DROP TABLE IF EXISTS group_user;
DROP TABLE IF EXISTS group;
DROP TABLE IF EXISTS event_group;
DROP TABLE IF EXISTS announcement_user;
DROP TABLE IF EXISTS announcement;
DROP TABLE IF EXISTS notification_announcement;
DROP TABLE IF EXISTS notification;
DROP TABLE IF EXISTS event_notification;
DROP TABLE IF EXISTS notification_user;

CREATE TABLE "user" (
    id INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
    lastname TEXT NOT NULL,
    firstname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamptz
);

CREATE TABLE "event_user" (
    PRIMARY KEY (id_event, id_user),
    id_event INTEGER NOT NULL,
    id_event INTERGER NOT NULL,
    creator TEXT NOT NULL
);

CREATE TABLE "event" (
    id INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
    title TEXT NOT NULL,
    date_event TIMESTAMP NOT NULL CHECK CURRENT_TIMESTAMP,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    zip_code VARCHAR(5) NOT NULL CHECK ( zip_code ~ '^\d{5}$'),
    town TEXT NOT NULL,
    country TEXT NOT NULL,
    status TEXT NOT NULL,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamptz
);

CREATE TABLE "group_user" (
    PRIMARY KEY (id_groupe, id_user)
    id_group INTERGER NOT NULL,
    id_user INTEGER NOT NULL
);

CREATE TABLE "group" (
     lastname TEXT NOT NULL,
     firstname TEXT NOT NULL
);

CREATE TABLE "event_group" (
    PRIMARY KEY (id_event, id_group)
    id_event INTEGER NOT NULL,
    id_group INTEGER NOT NULL
);

CREATE TABLE "announcement_user" (
    PRIMARY KEY (id_announcement, id_user)
    id_announcement INTEGER NOT NULL,
    id_user INTEGER NOT NULL
);

CREATE TABLE "announcement" (
    id INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
    title TEXT NOT NULL,
    date_announcement TIMESTAMP NOT NULL CHECK CURRENT_TIMESTAMP,
    message TEX NOT NULL,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamptz
);

CREATE TABLE "notification_announcement" (
    PRIMARY KEY (id_announcement, id_user),
    id_notification INTEGER NOT NULL,
    id_announcement INTERGER NOT NULL
);

CREATE TABLE "notification" (
    id INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    send_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_view timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    type TEXT NOT NULL,
    link TEXT NOT NULL
);

CREATE TABLE "event_notification" (
    PRIMARY KEY (id_event, id_notification),
    id_event INTEGER NOT NULL,
    id_notification INTEGER NOT NULL
);

CREATE TABLE "notification_user" (
    PRIMARY KEY (id_notification, id_user),
    id_notification INTEGER NOT NULL,
    id_user INTEGER NOT NULL
)


ALTER TABLE notification_user ADD FOREIGN KEY (id_notification) REFERENCES notification (id);
ALTER TABLE notification_user ADD FOREIGN KEY (id_user) REFERENCES "user" (id);

ALTER TABLE event_notification ADD FOREIGN KEY (id_event) REFERENCES event (id);
ALTER TABLE event_notification ADD FOREIGN KEY (id_notification) REFERENCES "notication" (id);