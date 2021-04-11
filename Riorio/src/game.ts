const building = new Entity()
building.addComponent(new GLTFShape("Models/building.glb"))
building.addComponent(new Transform(
  {
    position: new Vector3(16,0,16)
  }
))
engine.addEntity(building)

//video Screen
const myVideoClip = new VideoClip(
  "Video/Living Room - Rituals [lofi hip hoprelaxing beats].mp4"
)

const myVideoTexture = new VideoTexture(myVideoClip)

const myMaterial = new BasicMaterial()
myMaterial.texture = myVideoTexture

const screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(
  new Transform({
    position: new Vector3(16, 15.2, 3.7),
    rotation: new Quaternion(0, 0, 0, 0),
    scale: new Vector3(16,9, 5),
  })
)
screen.addComponent(myMaterial)
screen.addComponent(
  new OnPointerDown(() => {
    myVideoTexture.playing = !myVideoTexture.playing
  })
)
engine.addEntity(screen)

myVideoTexture.playing = true

//sponsors on the left of the screen
//sponsor1
const sponsorL = new Entity()
sponsorL.addComponent(new PlaneShape())
sponsorL.addComponent(
  new Transform({
    position: new Vector3(26, 15.4, 3.7),
    rotation: new Quaternion(180,0, 0,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(sponsorL)

const myLTexture = new Texture("Textures/SPONSOR-HERE.jpg")

const sponsorLMaterial = new BasicMaterial()
sponsorLMaterial.texture = myLTexture

sponsorL.addComponent(sponsorLMaterial)

//sponsor2
const sponsorL2 = new Entity()
sponsorL2.addComponent(new PlaneShape())
sponsorL2.addComponent(
  new Transform({
    position: new Vector3(26, 13.4, 3.7),
    rotation: new Quaternion(180,0, 0,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(sponsorL2)

const myL2Texture = new Texture("Textures/SPONSOR-HERE.jpg")

const sponsorL2Material = new BasicMaterial()
sponsorL2Material.texture = myL2Texture

sponsorL2.addComponent(sponsorL2Material)

//sponsor3
const sponsorL3 = new Entity()
sponsorL3.addComponent(new PlaneShape())
sponsorL3.addComponent(
  new Transform({
    position: new Vector3(26, 11.4, 3.7),
    rotation: new Quaternion(180,0, 0,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(sponsorL3)

const myL3Texture = new Texture("Textures/SPONSOR-HERE.jpg")

const sponsorL3Material = new BasicMaterial()
sponsorL3Material.texture = myL3Texture

sponsorL3.addComponent(sponsorL3Material)

//sponsor4
const sponsorL4 = new Entity()
sponsorL4.addComponent(new PlaneShape())
sponsorL4.addComponent(
  new Transform({
    position: new Vector3(26, 17.4, 3.7),
    rotation: new Quaternion(180,0, 0,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(sponsorL4)

const myL4Texture = new Texture("Textures/SPONSOR-HERE.jpg")

const sponsorL4Material = new BasicMaterial()
sponsorL4Material.texture = myL4Texture

sponsorL4.addComponent(sponsorL4Material)

//sponsor5
const sponsorL5 = new Entity()
sponsorL5.addComponent(new PlaneShape())
sponsorL5.addComponent(
  new Transform({
    position: new Vector3(26, 19.4, 3.7),
    rotation: new Quaternion(180,0, 0,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(sponsorL5)

const myL5Texture = new Texture("Textures/SPONSOR-HERE.jpg")

const sponsorL5Material = new BasicMaterial()
sponsorL5Material.texture = myL5Texture

sponsorL5.addComponent(sponsorL5Material)

//sponsor on the right of the screen
//sponsor1
const sponsorR = new Entity()
sponsorR.addComponent(new PlaneShape())
sponsorR.addComponent(
  new Transform({
    position: new Vector3(6, 15.4, 3.7),
    rotation: new Quaternion(180,0, 0,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(sponsorR)

const sponsorRTexture = new Texture("Textures/SPONSOR-HERE.jpg")

const sponsorRMaterial = new BasicMaterial()
sponsorRMaterial.texture = sponsorRTexture

sponsorR.addComponent(sponsorRMaterial)

//sponsor2
const sponsorR2 = new Entity()
sponsorR2.addComponent(new PlaneShape())
sponsorR2.addComponent(
  new Transform({
    position: new Vector3(6, 13.4, 3.7),
    rotation: new Quaternion(180,0, 0,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(sponsorR2)

const sponsorR2Texture = new Texture("Textures/SPONSOR-HERE.jpg")

const sponsorR2Material = new BasicMaterial()
sponsorR2Material.texture = sponsorR2Texture

sponsorR2.addComponent(sponsorR2Material)

//sponsor3
const sponsorR3 = new Entity()
sponsorR3.addComponent(new PlaneShape())
sponsorR3.addComponent(
  new Transform({
    position: new Vector3(6, 11.4, 3.7),
    rotation: new Quaternion(180,0, 0,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(sponsorR3)

const sponsorR3Texture = new Texture("Textures/SPONSOR-HERE.jpg")

const sponsorR3Material = new BasicMaterial()
sponsorR3Material.texture = sponsorR3Texture

sponsorR3.addComponent(sponsorR3Material)

//sponsor4
const sponsorR4 = new Entity()
sponsorR4.addComponent(new PlaneShape())
sponsorR4.addComponent(
  new Transform({
    position: new Vector3(6, 17.4, 3.7),
    rotation: new Quaternion(180,0, 0,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(sponsorR4)

const sponsorR4Texture = new Texture("Textures/SPONSOR-HERE.jpg")

const sponsorR4Material = new BasicMaterial()
sponsorR4Material.texture = sponsorR4Texture

sponsorR4.addComponent(sponsorR4Material)

//sponsor5
const sponsorR5 = new Entity()
sponsorR5.addComponent(new PlaneShape())
sponsorR5.addComponent(
  new Transform({
    position: new Vector3(6, 19.4, 3.7),
    rotation: new Quaternion(180,0, 0,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(sponsorR5)

const sponsorR5Texture = new Texture("Textures/SPONSOR-HERE.jpg")

const sponsorR5Material = new BasicMaterial()
sponsorR5Material.texture = sponsorR5Texture

sponsorR5.addComponent(sponsorR5Material)

//logo on top of screen
const logo = new Entity()
logo.addComponent(new PlaneShape())
logo.addComponent(
  new Transform({
    position: new Vector3(16, 21, 3.7),
    rotation: new Quaternion(180,0, 0,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(logo)

const logoTexture = new Texture("Textures/VHRL-LOGO.png")

const logoMaterial = new BasicMaterial()
logoMaterial.texture = logoTexture

logo.addComponent(logoMaterial)

//race schedule 2nd floor
const schedule = new Entity()
schedule.addComponent(new PlaneShape())
schedule.addComponent(
  new Transform({
    position: new Vector3(0.32, 13, 8),
    rotation: new Quaternion(180,0, -180,0),
    scale: new Vector3(4,4, 1),
  })
)
engine.addEntity(schedule)

const scheduleCover = new Entity()
scheduleCover.addComponent(new BoxShape())
scheduleCover.addComponent(
  new Transform({
    position: new Vector3(0.31, 13, 8),
    rotation: new Quaternion(180,0, -180,0),
    scale: new Vector3(4,4, 0.01),
  })
)
const coverMaterial = new Material()
let black = Color3.Black()
coverMaterial.albedoColor = Color3.Black()
scheduleCover.addComponent(coverMaterial)
engine.addEntity(scheduleCover)

const scheduleTexture = new Texture("Textures/VHRL-_season_schedule2.jpg")

const scheduleMaterial = new BasicMaterial()
scheduleMaterial.texture = scheduleTexture

schedule.addComponent(scheduleMaterial)

//Horse table
const horse = new Entity()
horse.addComponent(new PlaneShape())
horse.addComponent(
  new Transform({
    position: new Vector3(0.32, 13, 16),
    rotation: new Quaternion(180,0, -180,0),
    scale: new Vector3(4,4, 1),
  })
)
engine.addEntity(horse)

const horseCover = new Entity()
horseCover.addComponent(new BoxShape())
horseCover.addComponent(
  new Transform({
    position: new Vector3(0.315, 13, 16),
    rotation: new Quaternion(180,0, -180,0),
    scale: new Vector3(4,4, 0.01),
  })
)
const horsecoverMaterial = new Material()
let black1 = Color3.Black()
horsecoverMaterial.albedoColor = Color3.Black()
horseCover.addComponent(horsecoverMaterial)
engine.addEntity(horseCover)

const horseTexture = new Texture("Textures/league-table-week-1.jpg")

const horseMaterial = new BasicMaterial()
horseMaterial.texture = horseTexture

horse.addComponent(horseMaterial)

//ZED sponsor
const zed = new Entity()
zed.addComponent(new PlaneShape())
zed.addComponent(
  new Transform({
    position: new Vector3(0.32, 13, 24),
    rotation: new Quaternion(180,0, -180,0),
    scale: new Vector3(4,4, 1),
  })
)
engine.addEntity(zed)

const zedCover = new Entity()
zedCover.addComponent(new BoxShape())
zedCover.addComponent(
  new Transform({
    position: new Vector3(0.31, 13, 24),
    rotation: new Quaternion(180,0, -180,0),
    scale: new Vector3(4,4, 0.01),
  })
)
const zedcoverMaterial = new Material()
let black2 = Color3.Black()
zedcoverMaterial.albedoColor = Color3.Black()
zedCover.addComponent(zedcoverMaterial)
engine.addEntity(zedCover)

const zedTexture = new Texture("Textures/VHRL- sponsors.jpg")

const zedMaterial = new BasicMaterial()
zedMaterial.texture = zedTexture

zed.addComponent(zedMaterial)

//horse Image venue
const venue = new Entity()
venue.addComponent(new PlaneShape())
venue.addComponent(
  new Transform({
    position: new Vector3(16, 15.7, 3.3 ),
    rotation: new Quaternion(180,0, 0,0),
    scale: new Vector3(12,11.8, 1),
  })
)
engine.addEntity(venue)

const venueTexture = new Texture("Textures/horses-png-window.png")

const venueMaterial = new BasicMaterial()
venueMaterial.texture = venueTexture

venue.addComponent(venueMaterial)

//welcome, race this way sign
const welcome = new Entity()
welcome.addComponent(new PlaneShape())
welcome.addComponent(
  new Transform({
    position: new Vector3(18, 4, 30.21),
    rotation: new Quaternion(0,0, 90,0),
    scale: new Vector3(3,3, 1),
  })
)
engine.addEntity(welcome)

const welcomeCover = new Entity()
welcomeCover.addComponent(new BoxShape())
welcomeCover.addComponent(
  new Transform({
    position: new Vector3(18, 4, 30.355),
    rotation: new Quaternion(0,0, 90,0),
    scale: new Vector3(3,3, 0.28),
  })
)
const welcomeCoverMaterial = new Material()
let black3 = Color3.Black()
welcomeCoverMaterial.albedoColor = Color3.Black()
welcomeCover.addComponent(welcomeCoverMaterial)
engine.addEntity(welcomeCover)

const welcomeTexture = new Texture("Textures/CV-WELCOME-RACE-ARENA.jpg")

const welcomeMaterial = new BasicMaterial()
welcomeMaterial.texture = welcomeTexture

welcome.addComponent(welcomeMaterial)

//Entrance logo
const entrance = new Entity()
entrance.addComponent(new PlaneShape())
entrance.addComponent(
  new Transform({
    position: new Vector3(15.8, 8.5, 3.3),
    rotation: new Quaternion(0,0, 90,0),
    scale: new Vector3(3,3, 1),
  })
)
engine.addEntity(entrance)

const entranceTexture = new Texture("Textures/VHRL-LOGO.png")

const entranceMaterial = new BasicMaterial()
entranceMaterial.texture = entranceTexture

entrance.addComponent(entranceMaterial)
//List of race tables
//race 1
const race = new Entity()
race.addComponent(new PlaneShape())
race.addComponent(
  new Transform({
    position: new Vector3(2.3, 4, 12),
    rotation: new Quaternion(180,0, -180,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(race)

const raceTexture = new Texture("Textures/VHRL- LINEUP-1.jpg")

const raceMaterial = new BasicMaterial()
raceMaterial.texture = raceTexture

race.addComponent(raceMaterial)

//race 2
const race2 = new Entity()
race2.addComponent(new PlaneShape())
race2.addComponent(
  new Transform({
    position: new Vector3(2.3, 4, 14),
    rotation: new Quaternion(180,0, -180,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(race2)

const race2Texture = new Texture("Textures/VHRL- LINEUP-1.jpg")

const race2Material = new BasicMaterial()
race2Material.texture = race2Texture

race2.addComponent(race2Material)

//race 3
const race3 = new Entity()
race3.addComponent(new PlaneShape())
race3.addComponent(
  new Transform({
    position: new Vector3(2.3, 4, 16),
    rotation: new Quaternion(180,0, -180,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(race3)

const race3Texture = new Texture("Textures/VHRL- LINEUP-1.jpg")

const race3Material = new BasicMaterial()
race3Material.texture = race3Texture

race3.addComponent(race3Material)

//race 4
const race4 = new Entity()
race4.addComponent(new PlaneShape())
race4.addComponent(
  new Transform({
    position: new Vector3(2.3, 2, 16),
    rotation: new Quaternion(180,0, -180,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(race4)

const race4Texture = new Texture("Textures/VHRL- LINEUP-1.jpg")

const race4Material = new BasicMaterial()
race4Material.texture = race4Texture

race4.addComponent(race4Material)

//race 5
const race5 = new Entity()
race5.addComponent(new PlaneShape())
race5.addComponent(
  new Transform({
    position: new Vector3(2.3, 2, 14),
    rotation: new Quaternion(180,0, -180,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(race5)

const race5Texture = new Texture("Textures/VHRL- LINEUP-1.jpg")

const race5Material = new BasicMaterial()
race5Material.texture = race5Texture

race5.addComponent(race5Material)

//race 6
const race6 = new Entity()
race6.addComponent(new PlaneShape())
race6.addComponent(
  new Transform({
    position: new Vector3(2.3, 2, 12),
    rotation: new Quaternion(180,0, -180,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(race6)

const race6Texture = new Texture("Textures/VHRL- LINEUP-1.jpg")

const race6Material = new BasicMaterial()
race6Material.texture = race6Texture

race6.addComponent(race6Material)

//score
const score = new Entity()
score.addComponent(new PlaneShape())
score.addComponent(
  new Transform({
    position: new Vector3(2.3, 6, 16),
    rotation: new Quaternion(180,0, -180,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(score)

const scoreTexture = new Texture("Textures/VHRL-POINTS-2.jpg")

const scoreMaterial = new BasicMaterial()
scoreMaterial.texture = scoreTexture

score.addComponent(scoreMaterial)

//race today
const today = new Entity()
today.addComponent(new PlaneShape())
today.addComponent(
  new Transform({
    position: new Vector3(2.3, 6, 13),
    rotation: new Quaternion(180,0, -180,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(today)

const todayTexture = new Texture("Textures/CV-TODAYS RACES.jpg")

const todayMaterial = new BasicMaterial()
todayMaterial.texture = todayTexture

today.addComponent(todayMaterial)

//race schedule door
const schedule2 = new Entity()
schedule2.addComponent(new PlaneShape())
schedule2.addComponent(
  new Transform({
    position: new Vector3(21.2, 3, 3.3 ),
    rotation: new Quaternion(0,0, 90,0),
    scale: new Vector3(3,3, 1),
  })
)
engine.addEntity(schedule2)

const schedule2Texture = new Texture("Textures/VHRL-_season_schedule2.jpg")

const schedule2Material = new BasicMaterial()
schedule2Material.texture = schedule2Texture

schedule2.addComponent(schedule2Material)

//next race door
const next = new Entity()
next.addComponent(new PlaneShape())
next.addComponent(
  new Transform({
    position: new Vector3(10.2, 3, 3.38 ),
    rotation: new Quaternion(0,0, 90,0),
    scale: new Vector3(3,3, 1),
  })
)

engine.addEntity(next)

const nextTexture = new Texture("Textures/VHRL- NEXT-RACEDAY.jpg")

const nextMaterial = new BasicMaterial()
nextMaterial.texture = nextTexture

next.addComponent(nextMaterial)

//schedule 1st door
const schedule3 = new Entity()
schedule3.addComponent(new PlaneShape())
schedule3.addComponent(
  new Transform({
    position: new Vector3(10.2, 3, 3.6 ),
    rotation: new Quaternion(180,0, 0,0),
    scale: new Vector3(3,3, 1),
  })
)
engine.addEntity(schedule3)

const schedule3Cover = new Entity()
schedule3Cover.addComponent(new BoxShape())
schedule3Cover.addComponent(
  new Transform({
    position: new Vector3(10.2, 3, 3.49 ),
    rotation: new Quaternion(180,0, 0,0),
    scale: new Vector3(3,3, 0.205 ),
  })
)
const schedule3CoverMaterial = new Material()
let black10 = Color3.Black()
schedule3CoverMaterial.albedoColor = Color3.Black()
schedule3Cover.addComponent(schedule3CoverMaterial)
engine.addEntity(schedule3Cover)

const schedule3Texture = new Texture("Textures/VHRL-_season_schedule2.jpg")

const schedule3Material = new BasicMaterial()
schedule3Material.texture = schedule3Texture

schedule3.addComponent(schedule3Material)

//VHRL Rules
const rules = new Entity()
rules.addComponent(new PlaneShape())
rules.addComponent(
  new Transform({
    position: new Vector3(2.57, 4, 7.175),
    rotation: new Quaternion(180,0, -180,0),
    scale: new Vector3(2,2, 1),
  })
)
rules.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://virtualhorseracingleague.com/") //URL link
  })
)
engine.addEntity(rules)

const rulesTexture = new Texture("Textures/vhrl-rules-jpg.jpg")

const rulesMaterial = new BasicMaterial()
rulesMaterial.texture = rulesTexture

rules.addComponent(rulesMaterial)

//POAP
const poap = new Entity()
poap.addComponent(new PlaneShape())
poap.addComponent(
  new Transform({
    position: new Vector3(2.57, 2, 7.175),
    rotation: new Quaternion(180,0, -180,0),
    scale: new Vector3(2,2, 1),
  })
)
poap.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://virtualhorseracingleague.com/") //URL link
  })
)
engine.addEntity(poap)

const poapTexture = new Texture("Textures/POAP-RD1.jpg")

const poapMaterial = new BasicMaterial()
poapMaterial.texture = poapTexture

poap.addComponent(poapMaterial)

//Join the racing club
const join = new Entity()
join.addComponent(new PlaneShape())
join.addComponent(
  new Transform({
    position: new Vector3(2.57, 4, 20.781),
    rotation: new Quaternion(180,0, -180,0),
    scale: new Vector3(2,2, 1),
  })
)
join.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://virtualhorseracingleague.com/") //URL link
  })
)
engine.addEntity(join)

const joinTexture = new Texture("Textures/VHRL- JOINACLUB-NOW.jpg")

const joinMaterial = new BasicMaterial()
joinMaterial.texture = joinTexture

join.addComponent(joinMaterial)

//VHRL is free to play
const free = new Entity()
free.addComponent(new PlaneShape())
free.addComponent(
  new Transform({
    position: new Vector3(2.57, 2, 20.781),
    rotation: new Quaternion(180,0, -180,0),
    scale: new Vector3(2,2, 1),
  })
)
free.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://virtualhorseracingleague.com/") //URL link
  })
)
engine.addEntity(free)

const freeTexture = new Texture("Textures/vhrl-next-season-apply-jpg.jpg")

const freeMaterial = new BasicMaterial()
freeMaterial.texture = freeTexture

free.addComponent(freeMaterial)

//VHRL store
const store = new Entity()
store.addComponent(new PlaneShape())
store.addComponent(
  new Transform({
    position: new Vector3(21.2, 6.3, 14.5),
    rotation: new Quaternion(90,0, 90,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(store)

const storeCover = new Entity()
storeCover.addComponent(new BoxShape())
storeCover.addComponent(
  new Transform({
    position: new Vector3(21.23, 6.3, 14.5),
    rotation: new Quaternion(90,0, 90,0),
    scale: new Vector3(2,1.7, 0.01),
  })
)
const storeCoverMaterial = new Material()
let black11 = Color3.Black()
storeCoverMaterial.albedoColor = Color3.Black()
storeCover.addComponent(storeCoverMaterial)
engine.addEntity(storeCover)

const storeTexture = new Texture("Textures/VHRL-STORE.png")

const storeMaterial = new BasicMaterial()
storeMaterial.texture = storeTexture

store.addComponent(storeMaterial)

//Lucky8 logo
const luckyLogo = new Entity()
luckyLogo.addComponent(new PlaneShape())
luckyLogo.addComponent(
  new Transform({
    position: new Vector3(29.99, 3, 19.25 ),
    rotation: new Quaternion(90,0, 90,0),
    scale: new Vector3(2,2, 1),
  })
)

engine.addEntity(luckyLogo)

const luckyLogoTexture = new Texture("Textures/LUCKY8S-1.png")

const luckyLogoMaterial = new BasicMaterial()
luckyLogoMaterial.texture = luckyLogoTexture

luckyLogo.addComponent(luckyLogoMaterial)

//Lucky8 T-shirt
const luckyT = new Entity()
luckyT.addComponent(new PlaneShape())
luckyT.addComponent(
  new Transform({
    position: new Vector3(29.99 , 1.35, 19.25 ),
    rotation: new Quaternion(90,0, 90,0),
    scale: new Vector3(2,2, 1),
  })
)
luckyT.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://virtualhorseracingleague.com/") //URL link
  })
)
engine.addEntity(luckyT)

const luckyTTexture = new Texture("Textures/merch-lucky8s.png")

const luckyTMaterial = new BasicMaterial()
luckyTMaterial.texture = luckyTTexture

luckyT.addComponent(luckyTMaterial)

//Satoshi logo
const satoshiLogo = new Entity()
satoshiLogo.addComponent(new PlaneShape())
satoshiLogo.addComponent(
  new Transform({
    position: new Vector3(29.99, 3, 24.5 ),
    rotation: new Quaternion(90,0, 90,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(satoshiLogo)

const satoshiLogoTexture = new Texture("Textures/Satoshi-speedstars-LOGO-ALTERNATE.png")

const satoshiLogoMaterial = new BasicMaterial()
satoshiLogoMaterial.texture = satoshiLogoTexture

satoshiLogo.addComponent(satoshiLogoMaterial)

//Satoshi T-shirt
const satoshiT = new Entity()
satoshiT.addComponent(new PlaneShape())
satoshiT.addComponent(
  new Transform({
    position: new Vector3(29.99 , 1.35, 24.5 ),
    rotation: new Quaternion(90,0, 90,0),
    scale: new Vector3(2,2, 1),
  })
)
satoshiT.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://virtualhorseracingleague.com/") //URL link
  })
)
engine.addEntity(satoshiT)

const satoshiTTexture = new Texture("Textures/merch-satoshispeedstars.png")

const satoshiTMaterial = new BasicMaterial()
satoshiTMaterial.texture = satoshiTTexture

satoshiT.addComponent(satoshiTMaterial)

//Insane colts logo
const insaneLogo = new Entity()
insaneLogo.addComponent(new PlaneShape())
insaneLogo.addComponent(
  new Transform({
    position: new Vector3(29.99, 3, 14.1 ),
    rotation: new Quaternion(90,0, 90,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(insaneLogo)

const insaneLogoTexture = new Texture("Textures/INSANECOLTS-1.png")

const insaneLogoMaterial = new BasicMaterial()
insaneLogoMaterial.texture = insaneLogoTexture

insaneLogo.addComponent(insaneLogoMaterial)

//Insane Colts T-shirt
const insaneT = new Entity()
insaneT.addComponent(new PlaneShape())
insaneT.addComponent(
  new Transform({
    position: new Vector3(29.99 , 1.35, 14.1 ),
    rotation: new Quaternion(90,0, 90,0),
    scale: new Vector3(2,2, 1),
  })
)
insaneT.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://virtualhorseracingleague.com/") //URL link
  })
)
engine.addEntity(insaneT)

const insaneTTexture = new Texture("Textures/merch-insanecolts.png")

const insaneTMaterial = new BasicMaterial()
insaneTMaterial.texture = insaneTTexture

insaneT.addComponent(insaneTMaterial)

//Dark knight logo
const darkLogo = new Entity()
darkLogo.addComponent(new PlaneShape())
darkLogo.addComponent(
  new Transform({
    position: new Vector3(29.99, 3, 9.1 ),
    rotation: new Quaternion(90,0, 90,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(darkLogo)

const darkLogoTexture = new Texture("Textures/DARKKNIGHTS-1.png")

const darkLogoMaterial = new BasicMaterial()
darkLogoMaterial.texture = darkLogoTexture

darkLogo.addComponent(darkLogoMaterial)

//Dark knight T-shirt
const darkT = new Entity()
darkT.addComponent(new PlaneShape())
darkT.addComponent(
  new Transform({
    position: new Vector3(29.99 , 1.35, 9.1 ),
    rotation: new Quaternion(90,0, 90,0),
    scale: new Vector3(2,2, 1),
  })
)
darkT.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://virtualhorseracingleague.com/") //URL link
  })
)
engine.addEntity(darkT)

const darkTTexture = new Texture("Textures/merch-darknight.png")

const darkTMaterial = new BasicMaterial()
darkTMaterial.texture = darkTTexture

darkT.addComponent(darkTMaterial)

//YB logo
const ybLogo = new Entity()
ybLogo.addComponent(new PlaneShape())
ybLogo.addComponent(
  new Transform({
    position: new Vector3(26.15, 3, 29.2 ),
    rotation: new Quaternion(0,0, 90,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(ybLogo)

const ybLogoTexture = new Texture("Textures/YOUNGBUCKS-1.png")

const ybLogoMaterial = new BasicMaterial()
ybLogoMaterial.texture = ybLogoTexture

ybLogo.addComponent(ybLogoMaterial)

//YB T-shirt
const ybT = new Entity()
ybT.addComponent(new PlaneShape())
ybT.addComponent(
  new Transform({
    position: new Vector3(26.15, 1.35, 29.196 ),
    rotation: new Quaternion(0,0, 90,0),
    scale: new Vector3(2,2, 1),
  })
)
ybT.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://virtualhorseracingleague.com/") //URL link
  })
)
engine.addEntity(ybT)

const ybTTexture = new Texture("Textures/merh-youngbucks.png")

const ybTMaterial = new BasicMaterial()
ybTMaterial.texture = ybTTexture

ybT.addComponent(ybTMaterial)

//Royal clovers logo
const royalLogo = new Entity()
royalLogo.addComponent(new PlaneShape())
royalLogo.addComponent(
  new Transform({
    position: new Vector3(26.15, 3, 4.66 ),
    rotation: new Quaternion(180,0, 0,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(royalLogo)

const royalLogoTexture = new Texture("Textures/ROYALCLOVERS-1.png")

const royalLogoMaterial = new BasicMaterial()
royalLogoMaterial.texture = royalLogoTexture

royalLogo.addComponent(royalLogoMaterial)

//Royal clovers T-shirt
const royalT = new Entity()
royalT.addComponent(new PlaneShape())
royalT.addComponent(
  new Transform({
    position: new Vector3(26.15, 1.35, 4.66 ),
    rotation: new Quaternion(180,0, 0,0),
    scale: new Vector3(2,2, 1),
  })
)
royalT.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://virtualhorseracingleague.com/") //URL link
  })
)
engine.addEntity(royalT)

const royalTTexture = new Texture("Textures/merch-royalclovers.png")

const royalTMaterial = new BasicMaterial()
royalTMaterial.texture = royalTTexture

royalT.addComponent(royalTMaterial)

//Bar menu
const menu = new Entity()
menu.addComponent(new PlaneShape())
menu.addComponent(
  new Transform({
    position: new Vector3(30.99, 13, 8),
    rotation: new Quaternion(180,0,180 ,0),
    scale: new Vector3(4,4, 1),
  })
)

engine.addEntity(menu)

const barCover = new Entity()
barCover.addComponent(new BoxShape())
barCover.addComponent(
  new Transform({
    position: new Vector3(31.041, 13, 8),
    rotation: new Quaternion(90,0,90 ,0),
    scale: new Vector3(4,4, 0.1),
  })
)
const barCoverMaterial = new Material()
let black4 = Color3.Black()
barCoverMaterial.albedoColor = Color3.Black()
barCover.addComponent(barCoverMaterial)
engine.addEntity(barCover)

const menuTexture = new Texture("Textures/cv-buy-horse-end-of-season.png")

const menuMaterial = new BasicMaterial()
menuMaterial.texture = menuTexture

menu.addComponent(menuMaterial)

//Bar click here
const clickW = new Entity()
clickW.addComponent(new PlaneShape())
clickW.addComponent(
  new Transform({
    position: new Vector3(30.99, 11.5, 10.5),
    rotation: new Quaternion(180,0,180 ,0),
    scale: new Vector3(1,1, 1),
  })
)
clickW.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://virtualhorseracingleague.com/") //URL link
  })
)
engine.addEntity(clickW)

const clickWCover = new Entity()
clickWCover.addComponent(new BoxShape())
clickWCover.addComponent(
  new Transform({
    position: new Vector3(31.041, 11.5, 10.5),
    rotation: new Quaternion(90,0,90 ,0),
    scale: new Vector3(1,1, 0.1),
  })
)
const clickWCoverMaterial = new Material()
let black5 = Color3.Black()
clickWCoverMaterial.albedoColor = Color3.Black()
clickWCover.addComponent(clickWCoverMaterial)
engine.addEntity(clickWCover)

const clickWTexture = new Texture("Textures/CLICK-HERE-WHITE.jpg")

const clickWMaterial = new BasicMaterial()
clickWMaterial.texture = clickWTexture

clickW.addComponent(clickWMaterial)

//Betting menu
const betting = new Entity()
betting.addComponent(new PlaneShape())
betting.addComponent(
  new Transform({
    position: new Vector3(30.99, 13, 16),
    rotation: new Quaternion(180,0,180 ,0),
    scale: new Vector3(4,4, 1),
  })
)
engine.addEntity(betting)

const bettingCover = new Entity()
bettingCover.addComponent(new BoxShape())
bettingCover.addComponent(
  new Transform({
    position: new Vector3(31.041, 13, 16),
    rotation: new Quaternion(90,0,90 ,0),
    scale: new Vector3(4,4, 0.1),
  })
)
const bettingCoverMaterial = new Material()
let black6 = Color3.Black()
bettingCoverMaterial.albedoColor = Color3.Black()
bettingCover.addComponent(bettingCoverMaterial)
engine.addEntity(bettingCover)



const bettingTexture = new Texture("Textures/vhrl-betting-menu-unikrn.jpg")

const bettingMaterial = new BasicMaterial()
bettingMaterial.texture = bettingTexture

betting.addComponent(bettingMaterial)

//Betting click here
const clickB = new Entity()
clickB.addComponent(new PlaneShape())
clickB.addComponent(
  new Transform({
    position: new Vector3(30.99, 11.5, 18.5),
    rotation: new Quaternion(180,0,180 ,0),
    scale: new Vector3(1,1, 1),
  })
)
clickB.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://virtualhorseracingleague.com/") //URL link
  })
)
engine.addEntity(clickB)

const clickBCover = new Entity()
clickBCover.addComponent(new BoxShape())
clickBCover.addComponent(
  new Transform({
    position: new Vector3(31.041, 11.5, 18.5),
    rotation: new Quaternion(90,0,90 ,0),
    scale: new Vector3(1,1, 0.1),
  })
)
const clickBCoverMaterial = new Material()
let black7 = Color3.Black()
clickBCoverMaterial.albedoColor = Color3.Black()
clickBCover.addComponent(clickBCoverMaterial)
engine.addEntity(clickBCover)

const clickBTexture = new Texture("Textures/CV-CLICKHERE-BLACK.jpg")

const clickBMaterial = new BasicMaterial()
clickBMaterial.texture = clickBTexture

clickB.addComponent(clickBMaterial)

//Win 1 ETH
const win = new Entity()
win.addComponent(new PlaneShape())
win.addComponent(
  new Transform({
    position: new Vector3(30.99, 13, 24),
    rotation: new Quaternion(180,0,180 ,0),
    scale: new Vector3(4,4, 1),
  })
)
engine.addEntity(win)

const winCover = new Entity()
winCover.addComponent(new BoxShape())
winCover.addComponent(
  new Transform({
    position: new Vector3(31.041, 13, 24),
    rotation: new Quaternion(90,0,90 ,0),
    scale: new Vector3(4,4, 0.1),
  })
)
const winCoverMaterial = new Material()
let black8 = Color3.Black()
winCoverMaterial.albedoColor = Color3.Black()
winCover.addComponent(winCoverMaterial)
engine.addEntity(winCover)

const winTexture = new Texture("Textures/win-1-eth-2.jpg")

const winMaterial = new BasicMaterial()
winMaterial.texture = winTexture

win.addComponent(winMaterial)

//Win 1 ETH click here
const clickW2 = new Entity()
clickW2.addComponent(new PlaneShape())
clickW2.addComponent(
  new Transform({
    position: new Vector3(30.99, 11.5, 26.5),
    rotation: new Quaternion(180,0,180 ,0),
    scale: new Vector3(1,1, 1),
  })
)
clickW2.addComponent(
  new OnPointerDown(() => {
    openExternalURL("https://virtualhorseracingleague.com/") //URL link
  })
)
engine.addEntity(clickW2)

const clickW2Cover = new Entity()
clickW2Cover.addComponent(new BoxShape())
clickW2Cover.addComponent(
  new Transform({
    position: new Vector3(31.041, 11.5, 26.5),
    rotation: new Quaternion(90,0,90 ,0),
    scale: new Vector3(1,1, 0.1),
  })
)
const clickW2CoverMaterial = new Material()
let black9 = Color3.Black()
clickW2CoverMaterial.albedoColor = Color3.Black()
clickW2Cover.addComponent(clickW2CoverMaterial)
engine.addEntity(clickW2Cover)


const clickW2Texture = new Texture("Textures/CLICK-HERE-WHITE.jpg")

const clickW2Material = new BasicMaterial()
clickW2Material.texture = clickW2Texture

clickW2.addComponent(clickW2Material)

//ETH icon
const eth = new Entity()
eth.addComponent(new PlaneShape())
eth.addComponent(
  new Transform({
    position: new Vector3(25.97, 10.3, 24.4),
    rotation: new Quaternion(180,0,180 ,0),
    scale: new Vector3(1,1, 1),
  })
)
engine.addEntity(eth)

const ethTexture = new Texture("Textures/win-1-eth.png")

const ethMaterial = new BasicMaterial()
ethMaterial.texture = ethTexture

eth.addComponent(ethMaterial)

//unikrn icon
const unikrn = new Entity()
unikrn.addComponent(new PlaneShape())
unikrn.addComponent(
  new Transform({
    position: new Vector3(25.97, 10.3, 16.4),
    rotation: new Quaternion(180,0,180 ,0),
    scale: new Vector3(1,1, 1),
  })
)
engine.addEntity(unikrn)

const unikrnTexture = new Texture("Textures/UNIKRN.jpg")

const unikrnMaterial = new BasicMaterial()
unikrnMaterial.texture = unikrnTexture

unikrn.addComponent(unikrnMaterial)

//Bar icon
const barIcon = new Entity()
barIcon.addComponent(new PlaneShape())
barIcon.addComponent(
  new Transform({
    position: new Vector3(25.97, 10.3, 8.4),
    rotation: new Quaternion(180,0,180 ,0),
    scale: new Vector3(1,1, 1),
  })
)
engine.addEntity(barIcon)

const barIconTexture = new Texture("Textures/BAR-CV.jpg")

const barIconMaterial = new BasicMaterial()
barIconMaterial.texture = barIconTexture

barIcon.addComponent(barIconMaterial)

//horse Image back
const horseB = new Entity()
horseB.addComponent(new PlaneShape())
horseB.addComponent(
  new Transform({
    position: new Vector3(16, 15.2, 30.3 ),
    rotation: new Quaternion(180,0, 0,0),
    scale: new Vector3(12,12, 1),
  })
)
engine.addEntity(horseB)

const horseBTexture = new Texture("Textures/horses-png-window.png")

const horseBMaterial = new BasicMaterial()
horseBMaterial.texture = horseBTexture

horseB.addComponent(horseBMaterial)

//sponsor on the back
const sponsorB = new Entity()
sponsorB.addComponent(new PlaneShape())
sponsorB.addComponent(
  new Transform({
    position: new Vector3(16, 14.64, 27.2),
    rotation: new Quaternion(0,0, 90,0),
    scale: new Vector3(2,2, 1),
  })
)
engine.addEntity(sponsorB)

const sponsorBTexture = new Texture("Textures/SPONSOR-HERE.jpg")

const sponsorBMaterial = new BasicMaterial()
sponsorBMaterial.texture = sponsorBTexture

sponsorB.addComponent(sponsorBMaterial)

//Back logo
const backLogo = new Entity()
backLogo.addComponent(new PlaneShape())
backLogo.addComponent(
  new Transform({
    position: new Vector3(15.8, 8.5, 30.5),
    rotation: new Quaternion(180,0, 0,0),
    scale: new Vector3(3,3, 1),
  })
)
engine.addEntity(backLogo)

const backLogoTexture = new Texture("Textures/VHRL-LOGO.png")

const backLogoMaterial = new BasicMaterial()
backLogoMaterial.texture = backLogoTexture

backLogo.addComponent(backLogoMaterial)

//schedule back
const scheduleB = new Entity()
scheduleB.addComponent(new PlaneShape())
scheduleB.addComponent(
  new Transform({
    position: new Vector3(18, 4, 30.5),
    rotation: new Quaternion(180,0, 0,0),
    scale: new Vector3(3,3, 1),
  })
)
engine.addEntity(scheduleB)

const scheduleBTexture = new Texture("Textures/VHRL-_season_schedule2.jpg")

const scheduleBMaterial = new BasicMaterial()
scheduleBMaterial.texture = scheduleBTexture

scheduleB.addComponent(scheduleBMaterial)

//next raceday side
const raceDaySide = new Entity()
raceDaySide.addComponent(new PlaneShape())
raceDaySide.addComponent(
  new Transform({
    position: new Vector3(0.29, 4.03, 13.8 ),
    rotation: new Quaternion(90,0, 90,0),
    scale: new Vector3(5.75,5.75, 1),
  })
)
engine.addEntity(raceDaySide)

const raceDaySideTexture = new Texture("Textures/VHRL- NEXT-RACEDAY.jpg")

const raceDaySideMaterial = new BasicMaterial()
raceDaySideMaterial.texture = raceDaySideTexture

raceDaySide.addComponent(raceDaySideMaterial)

//floor
//floor1
const floor = new Entity()
floor.addComponent(new PlaneShape())
floor.addComponent(
  new Transform({
    position: new Vector3(11, 0.01, 25.3 ),
    rotation: new Quaternion(0,90, 90,0),
    scale: new Vector3(21.3,10, 1),
  })
)
engine.addEntity(floor)

const floorTexture = new Texture("Textures/floor-4.jpg")

const floorMaterial = new BasicMaterial()
floorMaterial.texture = floorTexture

floor.addComponent(floorMaterial)

//floor2
const floor1 = new Entity()
floor1.addComponent(new PlaneShape())
floor1.addComponent(
  new Transform({
    position: new Vector3(11, 0, 7.3 ),
    rotation: new Quaternion(-90,0, 0,90),
    scale: new Vector3(21.3,7.8, 1),
  })
)
engine.addEntity(floor1)

const floor1Texture = new Texture("Textures/floor-4.jpg")

const floor1Material = new BasicMaterial()
floor1Material.texture = floor1Texture

floor1.addComponent(floor1Material)

//floor 2nd floor
//floor1
const floor3 = new Entity()
floor3.addComponent(new PlaneShape())
floor3.addComponent(
  new Transform({
    position: new Vector3(24.5, 9.8, 8.5),
    rotation: new Quaternion(180,180, 180,-180),
    scale: new Vector3(3,3, 1),
  })
)
engine.addEntity(floor3)

const floor3Texture = new Texture("Textures/floor-4.jpg")

const floor3Material = new BasicMaterial()
floor3Material.texture = floor3Texture

floor3.addComponent(floor3Material)

//floor2
const floor4 = new Entity()
floor4.addComponent(new PlaneShape())
floor4.addComponent(
  new Transform({
    position: new Vector3(24.5, 9.8, 16.5),
    rotation: new Quaternion(180,180, 180,-180),
    scale: new Vector3(3,3, 1),
  })
)
engine.addEntity(floor4)

const floor4Texture = new Texture("Textures/floor-4.jpg")

const floor4Material = new BasicMaterial()
floor4Material.texture = floor4Texture

floor4.addComponent(floor4Material)

//floor3
const floor5 = new Entity()
floor5.addComponent(new PlaneShape())
floor5.addComponent(
  new Transform({
    position: new Vector3(24.5, 9.8, 24.5),
    rotation: new Quaternion(180,180, 180,-180),
    scale: new Vector3(3,3, 1),
  })
)
engine.addEntity(floor5)

const floor5Texture = new Texture("Textures/floor-4.jpg")

const floor5Material = new BasicMaterial()
floor5Material.texture = floor5Texture

floor5.addComponent(floor5Material)

//floor4
const floor6 = new Entity()
floor6.addComponent(new PlaneShape())
floor6.addComponent(
  new Transform({
    position: new Vector3(1.95, 9.8, 8.5),
    rotation: new Quaternion(-180, 180, -180,-180),
    scale: new Vector3(3,3, 1),
  })
)
engine.addEntity(floor6)

const floor6Texture = new Texture("Textures/floor-4.jpg")

const floor6Material = new BasicMaterial()
floor6Material.texture = floor6Texture

floor6.addComponent(floor6Material)

//floor5
const floor7 = new Entity()
floor7.addComponent(new PlaneShape())
floor7.addComponent(
  new Transform({
    position: new Vector3(1.95, 9.8, 15.5),
    rotation: new Quaternion(-180, 180, -180,-180),
    scale: new Vector3(3,3, 1),
  })
)
engine.addEntity(floor7)

const floor7Texture = new Texture("Textures/floor-4.jpg")

const floor7Material = new BasicMaterial()
floor7Material.texture = floor7Texture

floor7.addComponent(floor7Material)

//floor6
const floor8 = new Entity()
floor8.addComponent(new PlaneShape())
floor8.addComponent(
  new Transform({
    position: new Vector3(1.95, 9.8, 22.5),
    rotation: new Quaternion(-180, 180, -180,-180),
    scale: new Vector3(3,3, 1),
  })
)
engine.addEntity(floor8)

const floor8Texture = new Texture("Textures/floor-4.jpg")

const floor8Material = new BasicMaterial()
floor8Material.texture = floor8Texture

floor8.addComponent(floor8Material)
