BEGIN;


INSERT INTO "users" (lastname, firstname, email, password_hash, role, status) 
    VALUES
        ('Gaspard', 'Vincent', 'vincentgaspard@test.com', 'hjksljjszhkbwhz', 'user', 'valide'),
        ('Mamour', 'Alexandre', 'alexmamour@test.com', 'husiahsuzdgdz', 'user', 'en attente'),
        ('Champion', 'Elodie', 'elodiechampion@test.com', 'jnvffvjfoorvo', 'admin', 'bloqué');



INSERT INTO "event" (title, date_event, name, address, zip_code, city, country, status, creator_id)
    VALUES
        ('Sortie Pub', '2026-01-01 09:30:56', 'Le bistrot', '4 rue de la reine', '92100', 'Boulogne-billancourt', 'France', 'valide', 1),
        ('Sortie bowling', '2026-01-05 09:30:56', 'La place des jeux', '20 rue carnot', '93100', 'Stain', 'France', 'valide', 2),
        ('Sortie Escape', '2026-01-10 00:39:56', 'Escape Game', '55 boulevard des terne', '94000', 'Créteil', 'France', 'valide', 3);


INSERT INTO "event_user" (id_event, id_user)
    VALUES
        (1, 1),
        (2, 2);


INSERT INTO "group" (lastname, firstname)
    VALUES
        (1, 1),
        (2, 2);



INSERT INTO "group_user" (id_group, id_user)
    VALUES
        (1, 1),
        (1, 2),
        (2, 1);





INSERT INTO "event_group" (id_event, id_group)
    VALUES
        (1, 1),
        (2, 2);



INSERT INTO "announcement" (title, date_announcement, message) 
    VALUES
        ('Réunion avec la direction', '2026-01-01 09:30:56', 'Annonce sur les projet aerospace, les nouvelle rêgle du group'),
        ('Barbecue annuel', '2026-01-01 09:30:56', 'Annonce sur les projet aerospace, les nouvelle rêgle du group');



INSERT INTO "announcement_user" (id_announcement, id_user)
    VALUES
        (1, 1),
        (1, 2),
        (2, 2);



INSERT INTO "notification" (title, message, send_at, is_view, type, link)
    VALUES
        ('Nouvelle réunion', 'Nous discuteroons des nouvelles procédure', NOW(), true, 'comité', 'https://advbe.com'),
        ('Sortie Bowling', 'Sortie bowling à paris', NOW(), false, 'évènement', 'https://advbe.com');



INSERT INTO "notification_announcement" (id_notification, id_announcement)
    VALUES
        (1, 1),
        (2, 2);




INSERT INTO "event_notification" (id_event, id_notification)
    VALUES
        (1, 1),
        (2, 2);




INSERT INTO "notification_user" (id_notification, id_user)
    VALUES
        (1, 1),
        (1, 2);


COMMIT;