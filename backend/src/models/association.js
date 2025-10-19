import sequelize from '../client/client.js';

import Announcement from './Announcement.js';
import Notification from './Notification.js';
import Event from './Event.js';
import User from './User.js';

import Announcement_user from './jointure/Announcement_user.js';
import Event_user from './jointure/Event_user.js';
import Notification_announcement from './jointure/Notification_anouncement.js';
import Notification_event from './jointure/Notification_event.js';
import Notification_user from './jointure/Notification_user.js';



/* USER - EVENT : Many-to-Many via Event_user */

User.belongsToMany(Event, { 
    through: 'event_user', 
    foreignKey: 'id_user', 
    as: 'evenements' 
});

Event.belongsToMany(User, { 
    through: 'event_user', 
    foreignKey: 'id_event', 
    as: 'participants' 
});


/* USER - ANNOUNCEMENT : Many-to-Many via Announcement_user */

User.belongsToMany(Announcement, { 
    through: 'announcement_user', 
    foreignKey: 'id_user', 
    as: 'annonces' 
});

Announcement.belongsToMany(User, { 
    through: 'announcement_user', 
    foreignKey: 'id_announcement', 
    as: 'destinataires' 
});

/* ANNOUNCEMENT - NOTIFICATION : Many-to-Many via Notification_announcement */

Announcement.belongsToMany(Notification, { 
    through: 'notification_announcement', 
    foreignKey: 'id_announcement', 
    as: 'notifications' 
});

Notification.belongsToMany(Announcement, { 
    through: 'notification_announcement', 
    foreignKey: 'id_notification', 
    as: 'annonces' 
});

/* EVENT - NOTIFICATION : Many-to-Many via Notification_event */

Event.belongsToMany(Notification, { 
    through: 'notification_event', 
    foreignKey: 'id_event', 
    as: 'notifications' 
});

Notification.belongsToMany(Event, { 
    through: 'notification_event', 
    foreignKey: 'id_notification', 
    as: 'evenements' 
});

/* USER - NOTIFICATION : Many-to-Many via Notification_user */

User.belongsToMany(Notification, { 
    through: 'notification_user', 
    foreignKey: 'id_user', 
    as: 'notifications' 
});

Notification.belongsToMany(User, { 
    through: 'notification_user', 
    foreignKey: 'id_notification', 
    as: 'destinataires' 
});

export default sequelize; User, Announcement, Event, Notification, Announcement_user, Event_user, Notification_announcement, Notification_event, Notification_user;