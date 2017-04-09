import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import g from 'genesis-object'
import Vod from '../models/Vod'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: g(function () {
        var self = {
            query: '',
            vods: [Vod]
        }
        return self
    }).create(),
    actions: {
        LOAD_VOD_LIST: function ({ commit }) {
            commit('SET_VOD_LIST', {
                list: [
                    {
                        "videoKey": "PvewhhmIWOw",
                        "title": "Top 10 Teamfights - MSI 2016: Group Stage",
                        "description": "Top 10 Teamfights from Mid-Season Invitational (MSI 2016), Group Stage Esports on demand? Find our spoiler-free subreddit at ...",
                        "thumbURL": "https://i.ytimg.com/vi/PvewhhmIWOw/mqdefault.jpg",
                        "videoDate": "2016-05-09T14:18:52.000Z"
                    },
                    {
                        "videoKey": "b5w45SSzt-4",
                        "title": "Mid-Season Invitational (MSI 2016) - Opening Ceremony",
                        "description": "Mid-Season Invitational (MSI 2016) - Opening Ceremony Esports on demand? Find our spoiler-free subreddit at http://www.reddit.com/r/loleventvods We want to ...",
                        "thumbURL": "https://i.ytimg.com/vi/b5w45SSzt-4/mqdefault.jpg",
                        "videoDate": "2016-05-04T06:24:40.000Z"
                    },
                    {
                        "videoKey": "Tzljj25wRNc",
                        "title": "Top 10 Teamfights: NA LCS Week 1 - Summer Split 2016",
                        "description": "Top 10 Teamfights: NA LCS Week 1 - Summer Split 2016 Thanks to our Patrons: NSE360 We want to take Eventvods to the next level, support us on Patreon: ...",
                        "thumbURL": "https://i.ytimg.com/vi/Tzljj25wRNc/mqdefault.jpg",
                        "videoDate": "2016-06-07T22:02:44.000Z"
                    },
                    {
                        "videoKey": "bQd90ijPsG8",
                        "title": "Amazing vs aphromoo, 1v1 Round 1 - All-Star 2015",
                        "description": "Amazing vs aphromoo, 1v1 Round 1 - All-Star 2015 Esports on demand? Find our spoiler-free subreddit at http://www.reddit.com/r/loleventvods We want to take ...",
                        "thumbURL": "https://i.ytimg.com/vi/bQd90ijPsG8/mqdefault.jpg",
                        "videoDate": "2015-12-11T07:21:52.000Z"
                    },
                    {
                        "videoKey": "0JGZ8kT4AT8",
                        "title": "KT vs SKT, Game 1 - LCK Summer 2016 W2D6 - KT Rolster vs SK Telecom T1",
                        "description": "KT vs SKT, Game 1 - LCK Summer 2016 W2D6 - KT Rolster vs SK Telecom T1 Game Start: 7:04 Esports on demand? Find our spoiler-free subreddit at ...",
                        "thumbURL": "https://i.ytimg.com/vi/0JGZ8kT4AT8/mqdefault.jpg",
                        "videoDate": "2016-06-04T06:34:46.000Z"
                    },
                    {
                        "videoKey": "wm7XFK8IV_I",
                        "title": "Top 10 Teamfights: LCS Playoffs, Finals - Summer Split 2016",
                        "description": "Top 10 Teamfights: EU & NA LCS Playoffs, Finals - Summer Split 2016 Esports on demand? Find our spoiler-free subreddit at ...",
                        "thumbURL": "https://i.ytimg.com/vi/wm7XFK8IV_I/mqdefault.jpg",
                        "videoDate": "2016-09-05T06:29:04.000Z"
                    },
                    {
                        "videoKey": "8wkpY77iHfE",
                        "title": "Team Ice vs Team Fire, Assassins Mode - All-Star Event 2015",
                        "description": "Team Ice vs Team Fire battle in Assassins Mode for All-Stars Event 2015 Picks & Bans: 9:37 Game Start: 11:58 Analysis: 44:07 Esports on demand? Find our ...",
                        "thumbURL": "https://i.ytimg.com/vi/8wkpY77iHfE/mqdefault.jpg",
                        "videoDate": "2015-12-13T04:45:43.000Z"
                    },
                    {
                        "videoKey": "hszy_KKLz28",
                        "title": "IMT vs C9, Game 2 - NA LCS 2016 Regionals Round 3 - Immortals vs Cloud9",
                        "description": "IMT vs C9, Game 2 - NA LCS 2016 Regionals Round 3: Immortals vs Cloud9 - lolesports Picks & Bans: 1:19 Game Start: 6:55 Analysis: 39:19 Esports on ...",
                        "thumbURL": "https://i.ytimg.com/vi/hszy_KKLz28/mqdefault.jpg",
                        "videoDate": "2016-09-05T23:11:48.000Z"
                    },
                    {
                        "videoKey": "he7Y0GTXQgY",
                        "title": "IMT vs C9, Game 2 - NA LCS 2016 Summer Semifinal - Immortals vs Cloud9",
                        "description": "IMT vs C9, Game 2 - NA LCS 2016 Summer Semifinal: Immortals vs Cloud9 - lolesports Picks & Bans: 3:26 Game Start: 7:58 Analysis: 49:00 Esports on demand ...",
                        "thumbURL": "https://i.ytimg.com/vi/he7Y0GTXQgY/mqdefault.jpg",
                        "videoDate": "2016-08-20T23:10:44.000Z"
                    },
                    {
                        "videoKey": "INmM8CeVzkY",
                        "title": "CLG vs ROX - Worlds 2016 Group A - Counter Logic Gaming vs ROX Tigers",
                        "description": "CLG vs ROX - Worlds 2016 Group A - Counter Logic Gaming vs ROX Tigers - World Championship 2016 Picks & Bans: 3:54 Game Start: 10:00 Interview: 49:00 ...",
                        "thumbURL": "https://i.ytimg.com/vi/INmM8CeVzkY/mqdefault.jpg",
                        "videoDate": "2016-10-03T04:38:57.000Z"
                    },
                    {
                        "videoKey": "PKJeo_x3j04",
                        "title": "Top 10 Teamfights: NA LCS Week 6 - Summer Split 2016",
                        "description": "Top 10 Teamfights: NA LCS Week 6 - Summer Split 2016 Esports on demand? Find our spoiler-free subreddit at http://www.reddit.com/r/loleventvods We want to ...",
                        "thumbURL": "https://i.ytimg.com/vi/PKJeo_x3j04/mqdefault.jpg",
                        "videoDate": "2016-07-11T22:25:41.000Z"
                    },
                    {
                        "videoKey": "kSBuG2ObQV8",
                        "title": "ROX vs KT, Game 1 - LCK Summer 2016 Finals - ROX Tigers vs KT Rolster",
                        "description": "ROX vs KT, Game 1 - LCK Summer 2016 Finals - ROX Tigers vs KT Rolster Game Start: 06:40 Esports on demand? Find our spoiler-free subreddit at ...",
                        "thumbURL": "https://i.ytimg.com/vi/kSBuG2ObQV8/mqdefault.jpg",
                        "videoDate": "2016-08-20T09:41:48.000Z"
                    },
                    {
                        "videoKey": "KOs8CYxkQns",
                        "title": "TSM vs C9, Game 3 - NA LCS 2016 Summer Grand Final - Team SoloMid vs Cloud9",
                        "description": "TSM vs C9, Game 3 - NA LCS 2016 Summer Grand Final: Team SoloMid vs Cloud9 - lolesports Picks & Bans: 2:47 Game Start: 9:56 Analysis: 41:13 Esports on ...",
                        "thumbURL": "https://i.ytimg.com/vi/KOs8CYxkQns/mqdefault.jpg",
                        "videoDate": "2016-08-28T23:40:05.000Z"
                    },
                    {
                        "videoKey": "uUdSo9iEmRQ",
                        "title": "Top 10 Teamfights: NA LCS Week 4 - Summer Split 2016",
                        "description": "Top 10 Teamfights: NA LCS Week 4 - Summer Split 2016 Thanks to our Patrons: NSE360 & Jakebiehl We want to take Eventvods to the next level, support us on ...",
                        "thumbURL": "https://i.ytimg.com/vi/uUdSo9iEmRQ/mqdefault.jpg",
                        "videoDate": "2016-06-27T21:16:03.000Z"
                    },
                    {
                        "videoKey": "PWYVF4rLFv8",
                        "title": "Top 10 Teamfights: EU LCS Week 4 - Summer Split 2016",
                        "description": "Top 10 Teamfights: EU LCS Week 4 - Summer Split 2016 Thanks to our Patrons: NSE360 & Jakebiehl We want to take Eventvods to the next level, support us on ...",
                        "thumbURL": "https://i.ytimg.com/vi/PWYVF4rLFv8/mqdefault.jpg",
                        "videoDate": "2016-06-27T20:43:03.000Z"
                    },
                    {
                        "videoKey": "jDinl5ySoHY",
                        "title": "Top 10 Teamfights: EU LCS Week 8 - Summer Split 2016",
                        "description": "Top 10 Teamfights: EU LCS Week 8 - Summer Split 2016 Esports on demand? Find our spoiler-free subreddit at http://www.reddit.com/r/loleventvods We want to ...",
                        "thumbURL": "https://i.ytimg.com/vi/jDinl5ySoHY/mqdefault.jpg",
                        "videoDate": "2016-07-25T17:51:37.000Z"
                    },
                    {
                        "videoKey": "1oRiw7YrCjQ",
                        "title": "PraY vs Huni, 1v1 Round 1 - All-Star 2015",
                        "description": "PraY vs Huni, 1v1 Round 1 - All-Star 2015 Esports on demand? Find our spoiler-free subreddit at http://www.reddit.com/r/loleventvods We want to take ...",
                        "thumbURL": "https://i.ytimg.com/vi/1oRiw7YrCjQ/mqdefault.jpg",
                        "videoDate": "2015-12-11T04:32:31.000Z"
                    },
                    {
                        "videoKey": "4ajPbanj000",
                        "title": "Top 10 Teamfights: EU LCS Week 7 - Summer Split 2016",
                        "description": "Top 10 Teamfights: EU LCS Week 7 - Summer Split 2016 Esports on demand? Find our spoiler-free subreddit at http://www.reddit.com/r/loleventvods We want to ...",
                        "thumbURL": "https://i.ytimg.com/vi/4ajPbanj000/mqdefault.jpg",
                        "videoDate": "2016-07-20T17:31:46.000Z"
                    },
                    {
                        "videoKey": "iW5NSpueimU",
                        "title": "H2K vs EDG - Worlds 2016 Group C Tiebreaker - H2K vs EDward Gaming",
                        "description": "H2K vs EDG - Worlds 2016 Group C Tiebreaker - H2K vs EDward Gaming - World Championship 2016 Picks & Bans: 3:49 Game Start: 11:46 Interview: 1:00:37 ...",
                        "thumbURL": "https://i.ytimg.com/vi/iW5NSpueimU/mqdefault.jpg",
                        "videoDate": "2016-10-08T07:58:08.000Z"
                    },
                    {
                        "videoKey": "AF_4OZ5K8yk",
                        "title": "IMT vs C9, Game 1 - NA LCS 2016 Summer W5D3 - Immortals vs Cloud9",
                        "description": "IMT vs C9, Game 1 - NA LCS 2016 Summer W5D3: Immortals vs Cloud9 Picks & Bans: 6:26 Game Start: 14:30 Interview: 44:59 Esports on demand? Find our ...",
                        "thumbURL": "https://i.ytimg.com/vi/AF_4OZ5K8yk/mqdefault.jpg",
                        "videoDate": "2016-07-03T23:13:51.000Z"
                    },
                    {
                        "videoKey": "jEhXy0ARQUY",
                        "title": "SKT vs KT, Game 3 - LCK Summer 2016 Playoffs - SKTelecom T1 vs KT Rolster",
                        "description": "SKT vs KT, Game 3 - LCK Summer 2016 Playoffs - SKTelecom T1 vs KT Rolster Game Start: 08:06 Esports on demand? Find our spoiler-free subreddit at ...",
                        "thumbURL": "https://i.ytimg.com/vi/jEhXy0ARQUY/mqdefault.jpg",
                        "videoDate": "2016-08-12T12:52:27.000Z"
                    },
                    {
                        "videoKey": "uF3OpqB7qOc",
                        "title": "Top 10 Teamfights: NA LCS Week 7 - Summer Split 2016",
                        "description": "Top 10 Teamfights: NA LCS Week 7 - Summer Split 2016 Esports on demand? Find our spoiler-free subreddit at http://www.reddit.com/r/loleventvods We want to ...",
                        "thumbURL": "https://i.ytimg.com/vi/uF3OpqB7qOc/mqdefault.jpg",
                        "videoDate": "2016-07-21T05:58:10.000Z"
                    },
                    {
                        "videoKey": "w-9MrPWjy7I",
                        "title": "IMT vs TL, Game 1 - NA LCS 2016 Summer W4D2 - Immortals vs Team Liquid",
                        "description": "IMT vs TL, Game 1 - NA LCS 2016 Summer W4D2: Immortals vs Team Liquid Picks & Bans: 0:24 Game Start: 7:08 Analysis: 32:07 Esports on demand? Find our ...",
                        "thumbURL": "https://i.ytimg.com/vi/w-9MrPWjy7I/mqdefault.jpg",
                        "videoDate": "2016-06-25T23:05:15.000Z"
                    },
                    {
                        "videoKey": "QIzip89UaEw",
                        "title": "Top 10 Teamfights: NA LCS Week 2 - Summer Split 2016",
                        "description": "Top 10 Teamfights: NA LCS Week 2 - Summer Split 2016 Thanks to our Patrons: NSE360 We want to take Eventvods to the next level, support us on Patreon: ...",
                        "thumbURL": "https://i.ytimg.com/vi/QIzip89UaEw/mqdefault.jpg",
                        "videoDate": "2016-06-14T13:00:00.000Z"
                    },
                    {
                        "videoKey": "qVhpCb858Fs",
                        "title": "C9 vs TSM, Game 2 - NA LCS 2016 Summer W3D1 - Cloud9 vs Team SoloMid",
                        "description": "C9 vs TSM, Game 2 - NA LCS 2016 Summer W3D1: Cloud9 vs Team SoloMid Picks & Bans: 4:38 Game Start: 12:00 Analyst Desk: 39:36 Esports on demand?",
                        "thumbURL": "https://i.ytimg.com/vi/qVhpCb858Fs/mqdefault.jpg",
                        "videoDate": "2016-06-18T02:39:04.000Z"
                    },
                    {
                        "videoKey": "pp5Pdkt_lpM",
                        "title": "C9 vs IMT, Game 1 - NA LCS 2016 Summer W1D2 - Cloud9 vs Immortals",
                        "description": "C9 vs IMT, Game 1 - NA LCS 2016 Summer W1D2: Cloud9 vs Immortals Picks & Bans: 14:30 Game Start: 22:10 Analyst Desk: 1:05:41 Esports on demand?",
                        "thumbURL": "https://i.ytimg.com/vi/pp5Pdkt_lpM/mqdefault.jpg",
                        "videoDate": "2016-06-04T21:33:57.000Z"
                    },
                    {
                        "videoKey": "ejrih2gg-D8",
                        "title": "Top 10 Teamfights: NA LCS Week 5 - Summer Split 2016",
                        "description": "Top 10 Teamfights: NA LCS Week 5 - Summer Split 2016 Thanks to our Patrons: NSE360 & Jakebiehl We want to take Eventvods to the next level, support us on ...",
                        "thumbURL": "https://i.ytimg.com/vi/ejrih2gg-D8/mqdefault.jpg",
                        "videoDate": "2016-07-04T21:14:21.000Z"
                    },
                    {
                        "videoKey": "x2sVGsWXP6E",
                        "title": "LZ vs SKT, Game 1 - LCK Summer 2016 W5D5 - Longzhu Gaming vs SKTelecom T1",
                        "description": "LZ vs SKT, Game 1 - LCK Summer 2016 W5D5 - Longzhu Gaming vs SKTelecom T1 Game Start: 06:19 Esports on demand? Find our spoiler-free subreddit at ...",
                        "thumbURL": "https://i.ytimg.com/vi/x2sVGsWXP6E/mqdefault.jpg",
                        "videoDate": "2016-06-24T13:56:44.000Z"
                    },
                    {
                        "videoKey": "Y5v8p1zg0Tc",
                        "title": "Bjergsen vs Doublelift, 1v1 Final - All-Star Event Event 2015",
                        "description": "Bjergsen vs Doublelift, 1v1 Final - All-Star Event Event 2015 Game 1 Pick and Bans: 04:32 | Game Start: 05:52 Game 2 Pick and Bans: 09:46 | Game Start: 11:26 ...",
                        "thumbURL": "https://i.ytimg.com/vi/Y5v8p1zg0Tc/mqdefault.jpg",
                        "videoDate": "2015-12-14T02:43:06.000Z"
                    },
                    {
                        "videoKey": "VaR4htj0DYk",
                        "title": "SSG vs H2K, Game 2 - Worlds 2016 Semifinal - Samsung Galaxy vs H2K",
                        "description": "SSG vs H2K, Game 2 - Worlds 2016 Semifinal - Samsung Galaxy vs H2K - World Championship 2016 Picks & Bans: 1:20 Game Start: 7:20 Analyst Desk: 43:53 ...",
                        "thumbURL": "https://i.ytimg.com/vi/VaR4htj0DYk/mqdefault.jpg",
                        "videoDate": "2016-10-23T01:20:46.000Z"
                    },
                    {
                        "videoKey": "yFtujePb0b8",
                        "title": "SKT vs KT, Game 1 - LCK Summer 2016 Playoffs - SKTelecom T1 vs KT Rolster",
                        "description": "SKT vs KT, Game 1 - LCK Summer 2016 Playoffs - SKTelecom T1 vs KT Rolster Game Start: 07:29 Esports on demand? Find our spoiler-free subreddit at ...",
                        "thumbURL": "https://i.ytimg.com/vi/yFtujePb0b8/mqdefault.jpg",
                        "videoDate": "2016-08-12T10:49:11.000Z"
                    },
                    {
                        "videoKey": "_6OcDZlSRTc",
                        "title": "Bjergsen vs Smurf, 1v1 Round 1 - All-Star 2015",
                        "description": "Bjergsen vs Smurf, 1v1 Round 1 - All-Star 2015 Esports on demand? Find our spoiler-free subreddit at http://www.reddit.com/r/loleventvods We want to take ...",
                        "thumbURL": "https://i.ytimg.com/vi/_6OcDZlSRTc/mqdefault.jpg",
                        "videoDate": "2015-12-11T04:31:25.000Z"
                    },
                    {
                        "videoKey": "LBioBOZquHE",
                        "title": "SPY vs TSM - Worlds 2016 Group D - Splyce vs Team SoloMid",
                        "description": "SPY vs TSM - Worlds 2016 Group D - Splyce vs Team SoloMid - World Championship 2016 Picks & Bans: 6:14 Game Start: 12:08 Interview: 1:00:13 Esports on ...",
                        "thumbURL": "https://i.ytimg.com/vi/LBioBOZquHE/mqdefault.jpg",
                        "videoDate": "2016-10-02T06:44:07.000Z"
                    },
                    {
                        "videoKey": "PpKVGLzkX_8",
                        "title": "Top 10 Teamfights: EU LCS Week 2 - Summer Split 2016",
                        "description": "Top 10 Teamfights: EU LCS Week 2 - Summer Split 2016 Thanks to our Patrons: NSE360 We want to take Eventvods to the next level, support us on Patreon: ...",
                        "thumbURL": "https://i.ytimg.com/vi/PpKVGLzkX_8/mqdefault.jpg",
                        "videoDate": "2016-06-13T20:26:29.000Z"
                    },
                    {
                        "videoKey": "3X9imx0-wiQ",
                        "title": "TSM vs C9, Game 1 - NA LCS 2016 Summer Grand Final - Team SoloMid vs Cloud9",
                        "description": "TSM vs C9, Game 1 - NA LCS 2016 Summer Grand Final: Team SoloMid vs Cloud9 - lolesports Picks & Bans: 22:13 Game Start: 29:40 Analysis: 1:11:29 Esports ...",
                        "thumbURL": "https://i.ytimg.com/vi/3X9imx0-wiQ/mqdefault.jpg",
                        "videoDate": "2016-08-28T21:54:04.000Z"
                    },
                    {
                        "videoKey": "RMzM0HkAqdE",
                        "title": "C9 vs P1, Game 1 - NA LCS 2016 Summer W8D3 - Cloud9 vs Phoenix1",
                        "description": "C9 vs P1, Game 1 - NA LCS 2016 Summer W8D3: Cloud9 vs Phoenix1 Picks & Bans: 4:06 Game Start: 11:49 Analysis: 55:16 Esports on demand? Find our ...",
                        "thumbURL": "https://i.ytimg.com/vi/RMzM0HkAqdE/mqdefault.jpg",
                        "videoDate": "2016-07-24T22:45:47.000Z"
                    },
                    {
                        "videoKey": "2bCWCxEF-rw",
                        "title": "TSM vs CLG, Game 1 - NA LCS 2016 Summer W1D1 - Team SoloMid vs Counter Logic Gaming",
                        "description": "TSM vs CLG, Game 1 - NA LCS 2016 Summer W1D1: Team SoloMid vs Counter Logic Gaming Picks & Bans: 19:27 Game Start: 27:15 Analyst Desk: 1:00:41 ...",
                        "thumbURL": "https://i.ytimg.com/vi/2bCWCxEF-rw/mqdefault.jpg",
                        "videoDate": "2016-06-04T02:10:58.000Z"
                    },
                    {
                        "videoKey": "ojerU0LEGt8",
                        "title": "TL vs C9, Game 1 - NA LCS 2016 Summer W9D3 - Team Liquid vs Cloud9",
                        "description": "TL vs C9, Game 1 - NA LCS 2016 Summer W9D3: Team Liquid vs Cloud9 Picks & Bans: 3:11 Game Start: 10:09 Interview: 42:02 Esports on demand? Find our ...",
                        "thumbURL": "https://i.ytimg.com/vi/ojerU0LEGt8/mqdefault.jpg",
                        "videoDate": "2016-07-31T23:16:14.000Z"
                    },
                    {
                        "videoKey": "2mpSbV_aSnA",
                        "title": "Quarterfinals Draw Show 2016 World Championship",
                        "description": "Group Draw Show 2016 World Championship - lolesports Esports on demand? Find our spoiler-free subreddit at http://www.reddit.com/r/loleventvods We want ...",
                        "thumbURL": "https://i.ytimg.com/vi/2mpSbV_aSnA/mqdefault.jpg",
                        "videoDate": "2016-10-10T04:05:46.000Z"
                    },
                    {
                        "videoKey": "xFKFCP8WqxI",
                        "title": "SKT vs C9 - Worlds 2016 Group B - SK Telecom T1 vs Cloud9",
                        "description": "SKT vs C9 - Worlds 2016 Group B - SK Telecom T1 vs Cloud9 - World Championship 2016 Picks & Bans: 17:19 Game Start: 24:41 Interview: 1:01:20 Esports on ...",
                        "thumbURL": "https://i.ytimg.com/vi/xFKFCP8WqxI/mqdefault.jpg",
                        "videoDate": "2016-10-01T01:20:21.000Z"
                    },
                    {
                        "videoKey": "jQcOlumjhbo",
                        "title": "ROX vs EDG, Game 2 - Worlds 2016 Quarterfinal - ROX Tigers vs EDward Gaming",
                        "description": "ROX vs EDG, Game 2 - Worlds 2016 Quarterfinal - ROX Tigers vs EDward Gaming - World Championship 2016 Picks & Bans: 3:18 Game Start: 10:07 Analyst ...",
                        "thumbURL": "https://i.ytimg.com/vi/jQcOlumjhbo/mqdefault.jpg",
                        "videoDate": "2016-10-16T01:03:21.000Z"
                    },
                    {
                        "videoKey": "k8DiXSNNWpE",
                        "title": "Froggen vs Faker, 1v1 Round 1 - All-Star 2015",
                        "description": "The ultimate 1v1: Froggen vs Faker, Round 1 - All-Star 2015 Esports on demand? Find our spoiler-free subreddit at http://www.reddit.com/r/loleventvods We ...",
                        "thumbURL": "https://i.ytimg.com/vi/k8DiXSNNWpE/mqdefault.jpg",
                        "videoDate": "2015-12-11T06:58:00.000Z"
                    },
                    {
                        "videoKey": "LbVT0e-VdZQ",
                        "title": "ROX vs SKT, Game 3 - Worlds 2016 Semifinal - ROX Tigers vs SK Telecom T1",
                        "description": "ROX vs SKT, Game 3 - Worlds 2016 Semifinal - ROX Tigers vs SK Telecom T1 - World Championship 2016 Picks & Bans: 1:14 Game Start: 6:35 Analyst Desk: ...",
                        "thumbURL": "https://i.ytimg.com/vi/LbVT0e-VdZQ/mqdefault.jpg",
                        "videoDate": "2016-10-22T02:32:07.000Z"
                    },
                    {
                        "videoKey": "_EoL9Tb-lEY",
                        "title": "TSM vs IMT, Game 1 - NA LCS 2016 Summer W2D3 - Team SoloMid vs Immortals",
                        "description": "TSM vs IMT, Game 1 - NA LCS 2016 Summer W2D3: Team SoloMid vs Immortals Picks & Bans: 16:16 Game Start: 22:52 Analyst Desk: 50:10 Esports on ...",
                        "thumbURL": "https://i.ytimg.com/vi/_EoL9Tb-lEY/mqdefault.jpg",
                        "videoDate": "2016-06-12T20:48:15.000Z"
                    },
                    {
                        "videoKey": "PE-mdG-Qvyo",
                        "title": "C9 vs IM - Worlds 2016 Group B - Cloud9 vs I May",
                        "description": "C9 vs IM - Worlds 2016 Group B - Cloud9 vs I May - World Championship 2016 Picks & Bans: 3:41 Game Start: 11:06 Interview: 52:02 Esports on demand?",
                        "thumbURL": "https://i.ytimg.com/vi/PE-mdG-Qvyo/mqdefault.jpg",
                        "videoDate": "2016-10-03T07:12:04.000Z"
                    },
                    {
                        "videoKey": "eQ1tJgmNlj4",
                        "title": "TSM vs P1, Game 2 - NA LCS 2016 Summer W8D2 - Team SoloMid vs Phoenix1",
                        "description": "TSM vs P1, Game 2 - NA LCS 2016 Summer W8D2: Team SoloMid vs Phoenix1 Picks & Bans: 4:25 Game Start: 9:53 Analysis: 39:26 Esports on demand?",
                        "thumbURL": "https://i.ytimg.com/vi/eQ1tJgmNlj4/mqdefault.jpg",
                        "videoDate": "2016-07-24T00:33:42.000Z"
                    },
                    {
                        "videoKey": "dV_PGGddkbU",
                        "title": "APX vs IMT, Game 1 - NA LCS 2016 Summer W8D2 - Apex vs Immortals",
                        "description": "APX vs IMT, Game 1 - NA LCS 2016 Summer W8D2: Apex vs Immortals Picks & Bans: 4:53 Game Start: 14:14 Interview: 49:17 Esports on demand? Find our ...",
                        "thumbURL": "https://i.ytimg.com/vi/dV_PGGddkbU/mqdefault.jpg",
                        "videoDate": "2016-07-23T23:10:43.000Z"
                    },
                    {
                        "videoKey": "WyPPgCYwSLE",
                        "title": "IMT vs TSM, Game 2 - NA LCS 2016 Summer W9D1 - Immortals vs Team SoloMid",
                        "description": "IMT vs TSM, Game 2 - NA LCS 2016 Summer W9D1: Immortals vs Team SoloMid Picks & Bans: 0:46 Game Start: 7:04 Interview: 43:54 Interview 2: 47:13 ...",
                        "thumbURL": "https://i.ytimg.com/vi/WyPPgCYwSLE/mqdefault.jpg",
                        "videoDate": "2016-07-30T01:13:17.000Z"
                    },
                    {
                        "videoKey": "1yzqpTF-uDE",
                        "title": "Grand Final Opening Ceremony - Worlds 2016",
                        "description": "Grand Final Opening Ceremony - Worlds 2016 Esports on demand? Find our spoiler-free subreddit at http://www.reddit.com/r/loleventvods We want to take ...",
                        "thumbURL": "https://i.ytimg.com/vi/1yzqpTF-uDE/mqdefault.jpg",
                        "videoDate": "2016-10-30T01:35:28.000Z"
                    },
                    {
                        "videoKey": "sCUmQcoG0vs",
                        "title": "IM vs SKT - Worlds 2016 Group B - I May vs SK Telecom T1",
                        "description": "IM vs SKT - Worlds 2016 Group B - I May vs SK Telecom T1 - World Championship 2016 Picks & Bans: 6:53 Game Start: 14:59 Esports on demand? Find our ...",
                        "thumbURL": "https://i.ytimg.com/vi/sCUmQcoG0vs/mqdefault.jpg",
                        "videoDate": "2016-10-02T05:09:05.000Z"
                    }
                ]
            })
        }
    },
    mutations: {
        SET_VOD_LIST: (state, { list }) => {
            list.forEach(function(vod) {
                state.vods.pushCreate(vod)            
            }, this);
        }
    },
    getters: {
        filteredVods: state => {
            return state.vods.filter(vod => vod.title != "")
        }
    }
})
export default store