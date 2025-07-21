import './Lyrics.css';

const originalLyrics = `
Oh, oh
Oh

분명 나쁜 아이는 아니어도
또 틀에 가두면, we break it
Bum, no bigger than the girl next door
무대 서면, we fake it
No white collar, 근데 얜 좀 쳐
When I put mans in their places
모든 시선들은 날 따라와
But we ain't even famous

Don't you try me, I want some more
Don't you play me, we on the floor
Don't you try me, I want some more
We ain't even famous
Don't you try me, I want some more
Don't you play me, we on the floor
Don't you try me, I want some more
We ain't even famous
See upcoming rap shows
Get tickets for your favorite artists

You might also like
ALLDAY PROJECT - FAMOUS (Romanized)
Genius Romanizations
Gabriela
KATSEYE
WICKED
ALLDAY PROJECT

Money don't make friends, only got my fam
Pull up with my M's and I make thе money dance
Funny how it goes, but this is how it еnds
This is how I live by the name Tarzzan
I ain't even famous
다들 날 보면 오, they say less
And my kit in my whip is the latest
내 가친 조 단위 임마 불러봐, name is The Greatest Unfamous

느껴져 내 분위기
When I walk, 다 돌아봐
I be gettin' what I need
Those things I've got
Think it's going to my head
Know you lookin' when I dance
Take a quick pic for your friend
내 이름 알아둬

분명 나쁜 아이는 아니어도
또 틀에 가두면, we break it
Bum, no bigger than the girl next door
무대 서면, we fake it
No white collar, 근데 얜 좀 쳐
When I put mans in their places
모든 시선들은 날 따라와
But we ain't even famous

I'm stacking my dollars, 난 뿌리부터 달라
초록 빛깔 color, 감출 수 없어, 나잖아 빛이
Not even famous, but they wanna be us
같은 공기지만 우린 너무 다른 위치
비교 말어 걔넨 전부 구려
똑같은 걸 해도, I do it better
말해 뭐해, I'm a trendsetter
ALLDAY, I show 'em, 끝없는 체력

내 표적은 네 머리
When I walk, 다 돌아봐
I be gettin' what I need
Those things I've got
Think it's going to my head
Know you lookin' when I dance
Take a quick pic for your friend
내 이름 알아둬

분명 나쁜 아이는 아니어도
또 틀에 가두면, we break it
범 무서운지 모르고 덤벼
겁 없이, I just face it
No white collar, 근데 얜 좀 쳐
When I put mans in their places
모든 시선들은 날 따라와
But we ain't even famous (We ain't even famous)

(Don't) Don't you try me, I want some more
(Don't) Don't you play me, we on the floor
(Don't) Don't you try me, I want some more
We ain't even famous
(Don't) Don't you try me, I want some more
(Don't) Don't you play me, we on the floor
(Don't) Don't you try me, I want some more
We ain't even famous

다들 날 보면 오, they say less (Oh, oh)
Bang— (Oh, oh)
(Oh, oh-oh)
`;

const translatedLyrics = `
Oh, oh
Oh

I may not be a bad kid
But if you try to box me in, we break it
Bum, no bigger than the girl next door
When I'm on stage, we fake it
No white collar, but she's kind of wild
When I put mans in their places
All eyes follow me
But we ain't even famous

Don't you try me, I want some more
Don't you play me, we on the floor
Don't you try me, I want some more
We ain't even famous
Don't you try me, I want some more
Don't you play me, we on the floor
Don't you try me, I want some more
We ain't even famous
See upcoming rap shows
Get tickets for your favorite artists

You might also like
ALLDAY PROJECT - FAMOUS (Romanized)
Genius Romanizations
Gabriela
KATSEYE
WICKED
ALLDAY PROJECT

Money don't make friends, only got my fam
Pull up with my M's and I make the money dance
Funny how it goes, but this is how it ends
This is how I live by the name Tarzzan
I ain't even famous
When they see me, they go “Oh,” they say less
And my kit in my whip is the latest
Call my assets in the trillions, name is The Greatest Unfamous

You can feel my vibe
When I walk, everyone turns
I be gettin' what I need
Those things I've got
Think it's going to my head
Know you lookin' when I dance
Take a quick pic for your friend
Better remember my name

I may not be a bad kid
But if you try to box me in, we break it
Bum, no bigger than the girl next door
When I'm on stage, we fake it
No white collar, but she's kind of wild
When I put mans in their places
All eyes follow me
But we ain't even famous

I'm stacking my dollars, I'm built different
Green-colored vibe, can't hide it, it's just me shining
Not even famous, but they wanna be us
Same air, but we're in totally different positions
Don’t compare, they all suck
Even when we do the same thing, I do it better
No need to say it, I'm a trendsetter
ALLDAY, I show 'em, limitless stamina

My target is your head
When I walk, everyone turns
I be gettin' what I need
Those things I've got
Think it's going to my head
Know you lookin' when I dance
Take a quick pic for your friend
Better remember my name

I may not be a bad kid
But if you try to box me in, we break it
Picking a fight without knowing the beast is scary
Fearlessly, I just face it
No white collar, but she's kind of wild
When I put mans in their places
All eyes follow me
But we ain't even famous (We ain't even famous)

(Don't) Don't you try me, I want some more
(Don't) Don't you play me, we on the floor
(Don't) Don't you try me, I want some more
We ain't even famous
(Don't) Don't you try me, I want some more
(Don't) Don't you play me, we on the floor
(Don't) Don't you try me, I want some more
We ain't even famous

When they see me, they go “Oh,” they say less (Oh, oh)
Bang— (Oh, oh)
(Oh, oh-oh)
`;

const LyricsTrans = () => {
  const originalLines = originalLyrics.trim().split('\n');
  const translatedLines = translatedLyrics.trim().split('\n');
  const maxLines = Math.max(originalLines.length, translatedLines.length);

  return (
    <div className="lyrics-wrapper">
      {Array.from({ length: maxLines }).map((_, i) => (
        <div key={i} className="lyric-pair">
          <p className="original">{originalLines[i] || ''}</p>
          <p className="translated">{translatedLines[i] || ''}</p>
        </div>
      ))}
    </div>
  );
};

export default LyricsTrans;
