CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE groupMessages (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE messages (
    id INT PRIMARY KEY,
    content TEXT NOT NULL,
    groupMessage_id INT,
    sender_id INT,
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (groupMessage_id) REFERENCES groupMessages(id) ON DELETE SET NULL,
    FOREIGN KEY (sender_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE groupMessageMembers (
    id INT PRIMARY KEY,
    groupMessage_id INT,
    user_id INT,
    joined_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (groupMessage_id) REFERENCES groupMessages(id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Insert data into users table
INSERT INTO users (id, username, email, password, image, created_at) VALUES
(1, 'Alice', 'alice@example.com', 'password123', 'alice.jpg', '2024-11-12 10:00:00'),
(2, 'Bob', 'bob@example.com', 'password456', 'bob.jpg', '2024-11-12 10:10:00'),
(3, 'Charlie', 'charlie@example.com', 'password789', 'charlie.jpg', '2024-11-12 10:20:00');

-- Insert data into groupMessages table
INSERT INTO groupMessages (id, name, description, image, created_at) VALUES
(1, 'Project Team', 'Group for discussing project tasks and updates', 'team.jpg', '2024-11-12 10:30:00'),
(2, 'Friends', 'Chat group with friends', 'friends.jpg', '2024-11-12 10:35:00');

-- Insert data into messages table
INSERT INTO messages (id, content, groupMessage_id, sender_id, status, created_at) VALUES
(1, 'Hello team!', 1, 1, 'sent', '2024-11-12 10:40:00'),
(2, 'Did anyone complete the report?', 1, 2, 'sent', '2024-11-12 10:45:00'),
(3, 'Let’s meet for lunch.', 2, 3, 'sent', '2024-11-12 10:50:00');

-- Insert data into groupMessageMembers table
INSERT INTO groupMessageMembers (id, groupMessage_id, user_id, joined_at) VALUES
(1, 1, 1, '2024-11-12 10:55:00'),
(2, 1, 2, '2024-11-12 11:00:00'),
(3, 1, 3, '2024-11-12 11:05:00'),
(4, 2, 1, '2024-11-12 11:10:00'),
(5, 2, 3, '2024-11-12 11:15:00');
