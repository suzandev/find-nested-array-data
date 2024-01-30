const Data = () => {
  const users = [
    {
      id: 0,
      name: "Blanche",
      username: "Blanche.Herman",
      age: 28,
      nationality: "South Africa",
      friends: [11, 5, 32, 19],
    },
    {
      id: 1,
      name: "Wendy",
      username: "Wendy.Koelpin84",
      age: 50,
      nationality: "French Guiana",
      friends: [47, 43, 26, 45, 43, 10],
    },
    {
      id: 2,
      name: "Lynne",
      username: "Lynne77",
      age: 55,
      nationality: "Palestinian Territory",
      friends: [30, 5, 16, 47, 10, 49, 29, 40, 2, 45],
    },
    {
      id: 3,
      name: "Marsha",
      username: "Marsha10",
      age: 68,
      nationality: "Bhutan",
      friends: [36, 38, 2, 8, 32, 14],
    },
    {
      id: 4,
      name: "Ellen",
      username: "Ellen92",
      age: 74,
      nationality: "Bangladesh",
      friends: [44],
    },
    {
      id: 5,
      name: "Lila",
      username: "Lila_Collier92",
      age: 24,
      nationality: "Trinidad and Tobago",
      friends: [43, 30, 24, 9, 20, 0, 29, 13, 16, 24],
    },
    {
      id: 6,
      name: "Kelley",
      username: "Kelley_Bernier97",
      age: 36,
      nationality: "Zambia",
      friends: [5, 9, 11, 33, 43, 17, 40],
    },
    {
      id: 7,
      name: "Adrienne",
      username: "Adrienne.Tillman50",
      age: 44,
      nationality: "Saint Martin",
      friends: [10, 1],
    },
    {
      id: 8,
      name: "Dave",
      username: "Dave.Tremblay21",
      age: 28,
      nationality: "Mayotte",
      friends: [47, 10, 2, 41, 19, 4, 37, 15],
    },
    {
      id: 9,
      name: "Wallace",
      username: "Wallace.Rowe90",
      age: 28,
      nationality: "Syrian Arab Republic",
      friends: [33, 6, 34, 37, 19, 3, 26, 28, 12, 23],
    },
    {
      id: 10,
      name: "Victor",
      username: "Victor81",
      age: 49,
      nationality: "Saudi Arabia",
      friends: [35, 12, 35, 23, 40],
    },
    {
      id: 11,
      name: "Kerry",
      username: "Kerry.Ledner",
      age: 42,
      nationality: "Mongolia",
      friends: [13, 8, 27, 8, 4, 2],
    },
    {
      id: 12,
      name: "Margie",
      username: "Margie_Purdy",
      age: 31,
      nationality: "Rwanda",
      friends: [45, 42, 16, 9, 48, 1, 3, 49],
    },
    {
      id: 13,
      name: "Constance",
      username: "Constance_Koepp",
      age: 53,
      nationality: "Nauru",
      friends: [32, 26, 38, 28, 33, 36],
    },
    {
      id: 14,
      name: "Lorraine",
      username: "Lorraine_Moore",
      age: 38,
      nationality: "Indonesia",
      friends: [14, 28, 17, 16, 36, 22, 14],
    },
    {
      id: 15,
      name: "Leonard",
      username: "Leonard_Feest94",
      age: 58,
      nationality: "Oman",
      friends: [45],
    },
    {
      id: 16,
      name: "Cory",
      username: "Cory_Russel",
      age: 58,
      nationality: "Montserrat",
      friends: [38, 0, 10, 17, 38, 14, 47, 18, 11],
    },
    {
      id: 17,
      name: "Rudolph",
      username: "Rudolph_Schamberger78",
      age: 58,
      nationality: "Nepal",
      friends: [48, 45, 36, 40, 19, 22, 34, 25],
    },
    {
      id: 18,
      name: "Edgar",
      username: "Edgar_Schroeder",
      age: 72,
      nationality: "Norway",
      friends: [49, 37, 39, 5, 9],
    },
    {
      id: 19,
      name: "Jack",
      username: "Jack_Torphy",
      age: 64,
      nationality: "Guadeloupe",
      friends: [3, 47, 47, 20],
    },
    {
      id: 20,
      name: "Pat",
      username: "Pat_Terry",
      age: 39,
      nationality: "Guyana",
      friends: [38, 17, 9, 0, 30, 40, 46, 47, 31],
    },
    {
      id: 21,
      name: "Angela",
      username: "Angela.Torp60",
      age: 55,
      nationality: "Dominica",
      friends: [8, 5, 32, 16, 33, 36, 30, 33, 25, 3],
    },
    {
      id: 22,
      name: "Mattie",
      username: "Mattie99",
      age: 62,
      nationality: "Turkmenistan",
      friends: [31, 21, 0, 18, 15, 7, 38, 34],
    },
    {
      id: 23,
      name: "Erin",
      username: "Erin69",
      age: 59,
      nationality: "Denmark",
      friends: [47, 14, 4],
    },
    {
      id: 24,
      name: "Elmer",
      username: "Elmer.Hauck",
      age: 44,
      nationality: "Zimbabwe",
      friends: [15, 46, 23, 19, 28, 19, 43, 13, 17],
    },
    {
      id: 25,
      name: "Lewis",
      username: "Lewis_Schimmel19",
      age: 65,
      nationality: "India",
      friends: [10],
    },
    {
      id: 26,
      name: "Alexis",
      username: "Alexis66",
      age: 19,
      nationality: "Isle of Man",
      friends: [39, 40],
    },
    {
      id: 27,
      name: "Amelia",
      username: "Amelia.Hintz",
      age: 40,
      nationality: "Myanmar",
      friends: [46, 19, 42, 34, 46, 14, 16],
    },
    {
      id: 28,
      name: "Mabel",
      username: "Mabel.Hills38",
      age: 42,
      nationality: "Spain",
      friends: [36, 20, 43, 7, 19],
    },
    {
      id: 29,
      name: "Darrel",
      username: "Darrel.Wuckert",
      age: 32,
      nationality: "Saint Vincent and the Grenadines",
      friends: [43, 27, 12, 40, 28, 4, 6, 16, 36],
    },
    {
      id: 30,
      name: "Marcos",
      username: "Marcos_Lindgren0",
      age: 40,
      nationality: "Chile",
      friends: [43, 48, 44, 42, 12, 19, 9, 5, 4],
    },
    {
      id: 31,
      name: "Troy",
      username: "Troy.Feil",
      age: 30,
      nationality: "Israel",
      friends: [35, 3, 8, 44, 44, 20, 2, 7, 48, 1],
    },
    {
      id: 32,
      name: "Pat",
      username: "Pat.Zboncak9",
      age: 73,
      nationality: "Western Sahara",
      friends: [33, 0, 26, 17, 33, 13],
    },
    {
      id: 33,
      name: "Lance",
      username: "Lance.Cummerata",
      age: 39,
      nationality: "Croatia",
      friends: [45, 39, 36, 44, 29, 22, 37, 19, 36],
    },
    {
      id: 34,
      name: "Wilbur",
      username: "Wilbur_Grant97",
      age: 49,
      nationality: "Cyprus",
      friends: [40, 3, 45],
    },
    {
      id: 35,
      name: "Horace",
      username: "Horace_Kirlin",
      age: 62,
      nationality: "Portugal",
      friends: [49, 12, 24, 24, 23],
    },
    {
      id: 36,
      name: "Pete",
      username: "Pete_Herzog84",
      age: 80,
      nationality: "Chad",
      friends: [38, 17, 36, 17, 22, 5, 15],
    },
    {
      id: 37,
      name: "Rolando",
      username: "Rolando24",
      age: 52,
      nationality: "Haiti",
      friends: [44, 4, 0, 26, 44],
    },
    {
      id: 38,
      name: "Boyd",
      username: "Boyd.Collins",
      age: 68,
      nationality: "Ethiopia",
      friends: [41, 25, 21, 20, 47],
    },
    {
      id: 39,
      name: "Kristi",
      username: "Kristi23",
      age: 66,
      nationality: "Ireland",
      friends: [6, 12, 9, 5],
    },
    {
      id: 40,
      name: "Marco",
      username: "Marco.Marvin1",
      age: 46,
      nationality: "Mayotte",
      friends: [2, 17, 12, 18],
    },
    {
      id: 41,
      name: "Cora",
      username: "Cora.Kulas",
      age: 35,
      nationality: "Belgium",
      friends: [3, 19, 25, 45],
    },
    {
      id: 42,
      name: "Irene",
      username: "Irene56",
      age: 65,
      nationality: "Cook Islands",
      friends: [14, 11, 38, 13, 4, 37, 24, 31, 45],
    },
    {
      id: 43,
      name: "Rex",
      username: "Rex_Spinka23",
      age: 40,
      nationality: "Zambia",
      friends: [0, 34, 39, 2],
    },
    {
      id: 44,
      name: "Suzanne",
      username: "Suzanne85",
      age: 76,
      nationality: "Aruba",
      friends: [5, 49, 0, 35, 46, 16, 6, 29],
    },
    {
      id: 45,
      name: "Don",
      username: "Don.Bauch",
      age: 37,
      nationality: "Libyan Arab Jamahiriya",
      friends: [25, 40, 41, 18],
    },
    {
      id: 46,
      name: "Katie",
      username: "Katie.Senger40",
      age: 76,
      nationality: "Vanuatu",
      friends: [29, 47, 20, 41, 14, 36, 6],
    },
    {
      id: 47,
      name: "Ted",
      username: "Ted.Spinka",
      age: 40,
      nationality: "Luxembourg",
      friends: [29, 14, 20, 10],
    },
    {
      id: 48,
      name: "Steve",
      username: "Steve_McClure",
      age: 23,
      nationality: "Slovenia",
      friends: [22, 15, 36, 42],
    },
    {
      id: 49,
      name: "Dustin",
      username: "Dustin_Pacocha43",
      age: 31,
      nationality: "Nigeria",
      friends: [33, 6, 40, 31, 26, 14, 8],
    },
  ];

  const userWithFriends = users.map((user) => {
    const friends = user.friends.map((friend) => {
      return users.find((u) => u.id === friend);
    });
    return { ...user, friends };
  });

  console.log(userWithFriends);

  return (
    <div>
      <h3 className="text-2xl text-blue-500">
        you can find nested user data, please open the console and see the
        result
      </h3>
    </div>
  );
};

export default Data;
