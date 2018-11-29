CREATE TABLE postage (
postage_id serial primary key,
postage_name varchar(50),
postage_name_id numeric,
max_weight numeric,
price numeric
);

INSERT INTO postage (postage_name,postage_name_id, max_weight, price)
VALUES
('Letters (Stamped)', 1, 1, 0.50),
('Letters (Stamped)', 1, 2, 0.71),
('Letters (Stamped)', 1, 3, 0.92),
('Letters (Stamped)', 1, 3.5, 1.13),
('Letters (Metered)', 2, 1, 0.47),
('Letters (Metered)', 2, 2, 0.68),
('Letters (Metered)', 2, 3, 0.89),
('Letters (Metered)', 2, 3.5, 1.10),
('Postcard', 3, 1, 0.35),
('Large Envelopes (Flats)', 4, 1, 1.00),
('Large Envelopes (Flats)', 4, 2, 1.21),
('Large Envelopes (Flats)', 4, 3, 1.42),
('Large Envelopes (Flats)', 4, 4, 1.63),
('Large Envelopes (Flats)', 4, 5, 1.84),
('Large Envelopes (Flats)', 4, 6, 2.05),
('Large Envelopes (Flats)', 4, 7, 2.26),
('Large Envelopes (Flats)', 4, 8, 2.47),
('Large Envelopes (Flats)', 4, 9, 2.68),
('Large Envelopes (Flats)', 4, 10, 2.89),
('Large Envelopes (Flats)', 4, 11, 3.10),
('Large Envelopes (Flats)', 4, 12, 3.31),
('Large Envelopes (Flats)', 4, 13, 3.52),
('First-Class Package Service - Retail', 5, 1, 3.50),
('First-Class Package Service - Retail', 5, 2, 3.50),
('First-Class Package Service - Retail', 5, 3, 3.50),
('First-Class Package Service - Retail', 5, 4, 3.50),
('First-Class Package Service - Retail', 5, 5, 3.75),
('First-Class Package Service - Retail', 5, 6, 3.75),
('First-Class Package Service - Retail', 5, 7, 3.75),
('First-Class Package Service - Retail', 5, 8, 3.75),
('First-Class Package Service - Retail', 5, 9, 4.10),
('First-Class Package Service - Retail', 5, 10, 4.45),
('First-Class Package Service - Retail', 5, 11, 4.80),
('First-Class Package Service - Retail', 5, 12, 5.15),
('First-Class Package Service - Retail', 5, 13, 5.50),
('Keys and Identification Devices', 6, 1, 3.54),
('Keys and Identification Devices', 6, 2, 3.54),
('Keys and Identification Devices', 6, 3, 3.54),
('Keys and Identification Devices', 6, 4, 3.54),
('Keys and Identification Devices', 6, 5, 3.72),
('Keys and Identification Devices', 6, 6, 3.90),
('Keys and Identification Devices', 6, 7, 4.08),
('Keys and Identification Devices', 6, 8, 4.26),
('Keys and Identification Devices', 6, 9, 4.44),
('Keys and Identification Devices', 6, 10, 4.62),
('Keys and Identification Devices', 6, 11, 4.80),
('Keys and Identification Devices', 6, 12, 4.98),
('Keys and Identification Devices', 6, 13, 5.16);

CREATE TABLE postage_name (
postage_name_id serial primary key,
postage_name varchar(50)
);

INSERT INTO postage_name (postage_name)
VALUES
('Letters (Stamped)'),
('Letters (Metered)'),
('Postcard'),
('Large Envelopes (Flats)'),
('First-Class Package Service - Retail'),
('Keys and Identification Devices');