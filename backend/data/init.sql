BEGIN;


DROP TABLE IF EXISTS notification_user;
DROP TABLE IF EXISTS event_notification;
DROP TABLE IF EXISTS notification_announcement;
DROP TABLE IF EXISTS announcement_user;
DROP TABLE IF EXISTS event_user;
DROP TABLE IF EXISTS event_group;
DROP TABLE IF EXISTS group_user;
DROP TABLE IF EXISTS notification;
DROP TABLE IF EXISTS announcement;
DROP TABLE IF EXISTS event;
DROP TABLE IF EXISTS groups;
DROP TABLE IF EXISTS users;


CREATE TABLE "users" (
    id INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
    lastname TEXT NOT NULL,
    firstname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL,
    status TEXT NOT NULL,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamptz
);


CREATE TABLE "event" (
    id INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
    title TEXT NOT NULL,
    date_event TIMESTAMP NOT NULL CHECK (date_event > CURRENT_TIMESTAMP),
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    zip_code VARCHAR(5) NOT NULL CHECK ( zip_code ~ '^\d{5}$'),
    city TEXT NOT NULL,
    country TEXT NOT NULL,
    status TEXT NOT NULL,
    creator_id INTEGER NOT NULL,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamptz
);


CREATE TABLE "groups" (
    id INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
    group_name TEXT NOT NULL,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamptz
);



CREATE TABLE "event_user" (
    id_event INTEGER NOT NULL,
    id_user INTEGER NOT NULL,
    PRIMARY KEY (id_event, id_user),
    FOREIGN KEY (id_event) REFERENCES event(id) ON DELETE CASCADE,
    FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE "group_user" (
    id_group INTEGER NOT NULL,
    id_user INTEGER NOT NULL,
    PRIMARY KEY (id_group, id_user),
    FOREIGN KEY (id_group) REFERENCES groups(id) ON DELETE CASCADE,
    FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE
);



CREATE TABLE "event_group" (
    id_event INTEGER NOT NULL,
    id_group INTEGER NOT NULL,
    PRIMARY KEY (id_event, id_group),
    FOREIGN KEY (id_event) REFERENCES event(id) ON DELETE CASCADE,
    FOREIGN KEY (id_group) REFERENCES groups(id) ON DELETE CASCADE
);


CREATE TABLE "announcement" (
    id INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
    title TEXT NOT NULL,
    date_announcement TIMESTAMP NOT NULL CHECK (date_announcement > CURRENT_TIMESTAMP),
    message TEXT NOT NULL,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamptz
);


CREATE TABLE "announcement_user" (
    id_announcement INTEGER NOT NULL,
    id_user INTEGER NOT NULL,
    PRIMARY KEY (id_announcement, id_user),
    FOREIGN KEY (id_announcement) REFERENCES announcement(id) ON DELETE CASCADE,
    FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE
);


CREATE TABLE "notification" (
    id INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL PRIMARY KEY,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    send_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    is_view BOOLEAN DEFAULT FALSE,
    type TEXT NOT NULL,
    link TEXT NOT NULL,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamptz
);



CREATE TABLE "notification_announcement" (
    id_notification INTEGER NOT NULL,
    id_announcement INTEGER NOT NULL,
    PRIMARY KEY (id_notification, id_announcement),
    FOREIGN KEY (id_notification) REFERENCES notification(id) ON DELETE CASCADE,
    FOREIGN KEY (id_announcement) REFERENCES announcement(id) ON DELETE CASCADE
);



CREATE TABLE "event_notification" (
    id_event INTEGER NOT NULL,
    id_notification INTEGER NOT NULL,
    PRIMARY KEY (id_event, id_notification),
    FOREIGN KEY (id_event) REFERENCES event(id) ON DELETE CASCADE,
    FOREIGN KEY (id_notification) REFERENCES notification(id) ON DELETE CASCADE
);

CREATE TABLE "notification_user" (
    id_notification INTEGER NOT NULL,
    id_user INTEGER NOT NULL,
    PRIMARY KEY (id_notification, id_user),
    FOREIGN KEY (id_notification) REFERENCES notification(id) ON DELETE CASCADE,
    FOREIGN KEY (id_user) REFERENCES users(id) ON DELETE CASCADE
);


ALTER TABLE event_user ADD FOREIGN KEY (id_event) REFERENCES event (id);
ALTER TABLE event_user ADD FOREIGN KEY (id_user) REFERENCES users (id);

ALTER TABLE group_user ADD FOREIGN KEY (id_group) REFERENCES groups (id);
ALTER TABLE group_user ADD FOREIGN KEY (id_user) REFERENCES users (id);

ALTER TABLE event_group ADD FOREIGN KEY (id_event) REFERENCES event (id);
ALTER TABLE event_group ADD FOREIGN KEY (id_group) REFERENCES groups (id);

ALTER TABLE announcement_user ADD FOREIGN KEY (id_announcement) REFERENCES announcement (id);
ALTER TABLE announcement_user ADD FOREIGN KEY (id_user) REFERENCES users (id);

ALTER TABLE event_notification ADD FOREIGN KEY (id_event) REFERENCES event (id);
ALTER TABLE event_notification ADD FOREIGN KEY (id_notification) REFERENCES notification (id);

ALTER TABLE notification_user ADD FOREIGN KEY (id_notification) REFERENCES notification (id);
ALTER TABLE notification_user ADD FOREIGN KEY (id_user) REFERENCES users (id);


ALTER TABLE event ADD FOREIGN KEY (creator_id) REFERENCES users (id);


COMMIT;