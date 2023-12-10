TRUNCATE corplabs.cars;
TRUNCATE corplabs.users;
TRUNCATE corplabs.user_car;

INSERT INTO 
    corplabs.cars (year,make,model,colour,created_on) 
VALUES 
    ('2021','Aspark','Aspark Owl','WHITE',CURRENT_DATE),
    ('2021','Aspark','Aspark Owl','BLACK',CURRENT_DATE),
    ('2021','Aspark','Aspark Owl','BLUE',CURRENT_DATE),
    ('2021','Audi','Audi e-tron GT','BLUE',CURRENT_DATE),
    ('2021','BMW','BMW i4','WHITE',CURRENT_DATE),
    ('2021','BMW','BMW i4','BLACK',CURRENT_DATE),
    ('2022','General Motors','Cadillac Lyriq','BLACK',CURRENT_DATE),
    ('2022','Ford','Ford F-150 Lightning','WHITE',CURRENT_DATE),
    ('2020','Mazda','Mazda MX-30','WHITE',CURRENT_DATE),
    ('2017','Tesla','Tesla Model 3','BLACK',CURRENT_DATE),
    ('2017','Tesla','Tesla Model 3','WHITE',CURRENT_DATE),
    ('2020','Tesla','Tesla Model Y','RED',CURRENT_DATE);

INSERT INTO 
    corplabs.users (name,email,phone_number,created_on) 
VALUES 
    ('Joe Rogan','joe.rogan@example.com','+16145509889',CURRENT_DATE),
    ('Neil deGrasse Tyson','neil.tyson@example.com','+2348012456416',CURRENT_DATE),
    ('Lewis Hamilton','lewis.hamilton@example.com','+446658599527',CURRENT_DATE);

INSERT INTO 
    corplabs.user_car (user_id,car_id,created_on) 
VALUES 
    (1,10,CURRENT_DATE),
    (1,11,CURRENT_DATE),
    (2,8,CURRENT_DATE),
    (3,6,CURRENT_DATE),
    (3,7,CURRENT_DATE);