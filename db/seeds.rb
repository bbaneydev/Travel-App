# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
trip1 = Trip.create({
    location: "Gatlinburg, TN",
    start_date: "08-16-2022",
    end_date: "08-21-2022",
    text: "8:30am - Go to Cades Cove
    12:00pm - Eat lunch at Bubba Gumps
    1:30pm - Shop around the strip
    3:30pm - Go to the aquarium
    5:00pm - Meet back at the hotel
    5:30pm - Go eat dinner at Dicks
    7:00pm - Go see the strip at night
    9:00pm - Back to the hotel",
    user_id: 1
})

trip2 = Trip.create({
    location: "Branson, MO",
    start_date: "10-25-2022",
    end_date: "11-01-2022",
    text: "8:30am - Wake up
    9:30am - Go to Silver Dollar City
    12:30pm - Meet for lunch
    5:30pm - Leave SDC and go find supper
    7:00pm - Go to the strip mall
    8:30pm - Meet up for ice cream
    9:30pm - Back to the hotel
    10:30pm - Bedtime",
    user_id: 1
})

trip3 = Trip.create({
    location: "Juneau, AK",
    start_date: "06-06-2023",
    end_date: "06-12-2023",
    text: "8:30am - Eat breakfast
    10:00am - Go see the glaciers
    12:30pm - Lunch time
    2:00pm - Walk around town
    4:30pm - Eat supper
    6:00pm - Go explore outside of town
    9:00pm - Back to the hotel
    11:00pm - Bedtime",
    user_id: 1
})

album1 = Album.create({
    location: "Gatlinburg, TN",
    date: "08-20-2022",
    photo: 'https://www.visitmysmokies.com/wp-content/uploads/2017/11/Striking-photo-of-Gatlinburg-at-sunset.jpg',
    user_id: 1
})

album2 = Album.create({
    location: "Branson, MO",
    date: "10-31-2022",
    photo: 'https://images.unsplash.com/photo-1446484002819-52e5423f94a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    user_id: 1
})

album3 = Album.create({
    location: "Juneau, AK",
    date: "06-11-2023",
    photo: 'https://www.valisemag.com/wp-content/uploads/2021/02/Juneau-Facts-Hero.jpg',
    user_id: 1
})