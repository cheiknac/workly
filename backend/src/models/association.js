import sequelize from '../client/client.js';

import Announcement from './announcement.js';
import Notification from './notification.js';
import Event from './event.js';
import Group from './group.js';
import User from './user.js';

import Announcement_user from './jointure/announcement_user.js';
import Event_group from './jointure/event_group.js';
import Event_user from './jointure/event_user.js';
import Group_user from './jointure/group_user.js';
import Notification_announcement from './jointure/notification_anouncement.js';
import Notification_event from './jointure/notification_event.js';
import Notification_user from './jointure/notification_user.js';


/* USER - GROUP : Many-to-Many via Group_user */
User.belongsToMany(Group, { 
    through: Group_user, 
    foreignKey: 'id_user', 
    as: 'groupes' 
});

Group.belongsToMany(User, { 
    through: Group_user, 
    foreignKey: 'id_group', 
    as: 'utilisateurs' 
});


/* GROUP - EVENT : Many-to-Many via Event_group */

Group.belongsToMany(Event, { 
    through: Event_group, 
    foreignKey: 'id_group', 
    as: 'evenements' 
});

Event.belongsToMany(Group, { 
    through: Event_group, 
    foreignKey: 'id_event', 
    as: 'groupes' 
});


/* USER - EVENT : Many-to-Many via Event_user */

User.belongsToMany(Event, { 
    through: Event_user, 
    foreignKey: 'id_user', 
    as: 'evenements' 
});

Event.belongsToMany(User, { 
    through: Event_user, 
    foreignKey: 'id_event', 
    as: 'participants' 
});


/* USER - ANNOUNCEMENT : Many-to-Many via Announcement_user */

User.belongsToMany(Announcement, { 
    through: Announcement_user, 
    foreignKey: 'id_user', 
    as: 'annonces' 
});

Announcement.belongsToMany(User, { 
    through: Announcement_user, 
    foreignKey: 'id_announcement', 
    as: 'destinataires' 
});

/* ANNOUNCEMENT - NOTIFICATION : Many-to-Many via Notification_announcement */

Announcement.belongsToMany(Notification, { 
    through: Notification_announcement, 
    foreignKey: 'id_announcement', 
    as: 'notifications' 
});

Notification.belongsToMany(Announcement, { 
    through: Notification_announcement, 
    foreignKey: 'id_notification', 
    as: 'annonces' 
});

/* EVENT - NOTIFICATION : Many-to-Many via Notification_event */

Event.belongsToMany(Notification, { 
    through: Notification_event, 
    foreignKey: 'id_event', 
    as: 'notifications' 
});

Notification.belongsToMany(Event, { 
    through: Notification_event, 
    foreignKey: 'id_notification', 
    as: 'evenements' 
});

/* USER - NOTIFICATION : Many-to-Many via Notification_user */

User.belongsToMany(Notification, { 
    through: Notification_user, 
    foreignKey: 'id_user', 
    as: 'notifications' 
});

Notification.belongsToMany(User, { 
    through: Notification_user, 
    foreignKey: 'id_notification', 
    as: 'destinataires' 
});

export default sequelize; User, Announcement, Event, Group, Notification, Announcement_user, Event_group, Event_user, Group_user, Notification_announcement, Notification_event, Notification_user;