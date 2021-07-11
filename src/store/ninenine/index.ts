import store from '@/store'
import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators'
import {MBTIType, Character} from '@/models/character'
import {Option, Question, Category, Personality} from '@/models/question'
import {UserChoice} from '@/models/userChoice'

@Module({dynamic: true, store, name: 'ninenineStore'})
export default class NineNineModule extends VuexModule {
  private Characters: Character[] = [
    new Character(
      'Jake Peralta',
      MBTIType.ENFP,
      'I wasn\'t hurt that badly. The doctor said all my bleeding was internal. That\'s where the blood\'s supposed to be.'
    ),
    new Character(
      'Amy Santiago',
      MBTIType.INTJ,
      'Life is unpredictable. Not everything is in our control. But as long as you are with the right people, you can handle anything.'
    ),
    new Character(
      'Captain Holt',
      MBTIType.ISTJ,
      'Every time someone steps up and says who they are, the world becomes a better, more interesting place.'
    ),
    new Character('John Kelly', MBTIType.ESFJ, ''),
    new Character(
      'Rosa Diaz',
      MBTIType.ISTP,
      'Two steps forward, one step back is still one step forward.'
    ),
    new Character(
      'Gina Linetti',
      MBTIType.ENTP,
      "Just because you wanna do something doesn't mean you get to do it. Life is chaos, success is completely arbitrary, and confidence is everything."
    ),
    new Character(
      'Terry Jeffords',
      MBTIType.ENFJ,
      'I\'m Terry Jeffords, and when I put my mind to something, I do it.'
    ),
    new Character(
      'Bill Hummertrout',
      MBTIType.ESFP,
      " Now, here's a list of all the nicknames I go by. Big Bill, Big Eric, Big Drew, Big Dave, Super Thick-"
    ),
    new Character(
      'Scully',
      MBTIType.ISFP,
      "I guess I just don't care what other people think of me."
    ),
    new Character(
      'Cheddar',
      MBTIType.INTP,
      'Bad news: Cheddar is still at large, and you know that slippery little bastard is just laughing at us.'
    ),
    new Character(
      'Genevieve Mirren-Carter',
      MBTIType.ISFJ,
      'This painting is called "Genevieve 416.'
    ),
    new Character(
      'Charles Boyle',
      MBTIType.INFJ,
      'Help me! I\'ve gone full boyle!'
    ),
    new Character(
      'Nikolaj Boyle',
      MBTIType.INFP,
      'It\'s not Nikolaj, it\'s Nikolaj'
    ),
    new Character(
      'Cpt. Seth Dozerman',
      MBTIType.ESTJ,
      "Hello, I'm your new Commanding Officer, Captain Seth Dozerman. My motto is simple: efficiency, efficiency, efficiency."
    ),
    new Character(
      'Michael Hitchcock',
      MBTIType.ESTP,
      'What the hell. I had a feeling something crazy was gonna happen today.'
    ),
    new Character(
      'Captain Olivia Crawford',
      MBTIType.ENTJ,
      'I came here to make sure that at least one of us stays in the running. Someone has to beat John Kelly. So you better get that damn job.'
    )
  ]

  private Questions: Question[] = [
    new Question(
      'Jake and Gina wants hang out after work.',
      [
        new Option(
          'You, Amy and Boyle are playing board game at your house',
          Personality.Interoversion
        ),
        new Option(
          'Agree and go to the pub with them',
          Personality.Extroversion
        )
      ],
      Category.IE
    ),
    new Question(
      'You are at Captain Holt\'s party.',
      [
        new Option('Mingle with the guests.', Personality.Extroversion),
        new Option(
          'Stay in the bathroom with Cheddar',
          Personality.Interoversion
        )
      ],
      Category.IE
    ),
    new Question(
      'You are invited to participate in the Halloween Heist..',
      [
        new Option(
          'Accept the invitation and aim for the win',
          Personality.Extroversion
        ),
        new Option(
          'Decline and relax in Scully and Hitchcock\'s magical bathroom',
          Personality.Interoversion
        )
      ],
      Category.IE
    ),
    new Question(
      'During the lunch break, you...',
      [
        new Option(
          'Feature in Gina\'s youtube channel with Jake',
          Personality.Extroversion
        ),
        new Option(
          'Read a book in the Lounge with Terry and Captain Holt',
          Personality.Interoversion
        )
      ],
      Category.IE
    ),
    new Question(
      'Scully and Hitchcock are greeting normal-looking people that you\'ve never seen before.',
      [
        new Option(
          'Introduce yourself to them and find out who they are.',
          Personality.Extroversion
        ),
        new Option('None of my business', Personality.Interoversion)
      ],
      Category.IE
    ),
    new Question(
      'Amy has gifted you a weekly planner. You are..',
      [
        new Option(
          'Dumbfounded because you already have a weekly planner',
          Personality.Judging
        ),
        new Option('Happy because you wanted a trivet', Personality.Perceiving)
      ],
      Category.JP
    ),
    new Question(
      'You are going on a diet. You ask Terry..',
      [
        new Option('To go for a run with you now', Personality.Perceiving),
        new Option(
          'To help you create a forthnightly diet plan',
          Personality.Judging
        )
      ],
      Category.JP
    ),
    new Question(
      'Adrian lost his memory and he\'s asked you to help him find his house.',
      [
        new Option('Start gathering information.', Personality.Judging),
        new Option(
          'Get Adrian out in the street and hope he can sense his way back home.',
          Personality.Sensing
        )
      ],
      Category.JP
    ),
    new Question(
      'You are running after the perp and you lost the sight of him...',
      [
        new Option(
          'Open google map and try to find places the perp might be hiding',
          Personality.Perceiving
        ),
        new Option(
          'Retrace his steps by going back to where you last saw him.',
          Personality.Judging
        )
      ],
      Category.JP
    ),
    new Question(
      'Captain Holt is giving you an incredible opportunity but that will disrupt your major future plan..',
      [
        new Option('Who cares about the plan.', Personality.Perceiving),
        new Option(
          'Need to think about this a bit more, Captain Holt',
          Personality.Judging
        )
      ],
      Category.JP
    ),
    new Question(
      'While on the boring stake-out, you start thinking about...',
      [
        new Option(
          'becoming a meta human and joining the Avengers',
          Personality.Intuition
        ),
        new Option('what you want for dinner', Personality.Sensing)
      ],
      Category.SI
    ),
    new Question(
      'Let\'s watch...',
      [
        new Option('Die Hard all the way!', Personality.Intuition),
        new Option('True crime documentary would be good', Personality.Sensing)
      ],
      Category.SI
    ),
    new Question(
      'In order to catch the criminal, Jake suggests a new and creative way',
      [
        new Option(
          'Agree because we need something unconventional to catch this guy.',
          Personality.Intuition
        ),
        new Option(
          'Let\'s try to catch this guy the "right" way.',
          Personality.Sensing
        )
      ],
      Category.SI
    ),
    new Question(
      'Boyle and Amy wants to start a new food truck business called the "Ghost Taco" and they want your opinion.',
      [
        new Option(
          'Tell them you need more information before you can give your opinon.',
          Personality.Sensing
        ),
        new Option('That\'s a great idea. Count me in!', Personality.Intuition)
      ],
      Category.SI
    ),
    new Question(
      'Is Rosa...',
      [
        new Option(
          'Secretly a spy from Russia? The Black Widow!',
          Personality.Intuition
        ),
        new Option(
          'Paying for the computers and keyboards that she break?',
          Personality.Sensing
        )
      ],
      Category.SI
    ),
    new Question(
      'Terry\'s yogurts are gone. You...',
      [
        new Option(
          'comfort Terry and asks him if he\'s alright.',
          Personality.Feeling
        ),
        new Option(
          'ask Terry where and when he last saw them.',
          Personality.Thinking
        )
      ],
      Category.TF
    ),
    new Question(
      'Charles bought you a cake saying he wanted to cheer you up because you looked upset!',
      [
        new Option('Thank Charles', Personality.Feeling),
        new Option(
          'Ask Charles why he thought you looked upset',
          Personality.Thinking
        )
      ],
      Category.TF
    ),
    new Question(
      'Adrian calls you and tells you he had a car accident.',
      [
        new Option('Ask Adrian if he has insurance', Personality.Thinking),
        new Option(
          'Ask Adrian if he\'s alright and try to comfort him',
          Personality.Feeling
        )
      ],
      Category.TF
    ),
    new Question(
      'You are at Amy\'s Thanksgiving party. Charles wants to kill the live Turkey..',
      [
        new Option('Please don\'t kill the turkey!', Personality.Feeling),
        new Option('Yum!', Personality.Thinking)
      ],
      Category.TF
    ),
    new Question(
      'Vulture swooped in and took your case. You...',
      [
        new Option(
          'Complain about the Vulture with Nine-Nine and let your frustration out',
          Personality.Feeling
        ),
        new Option('Start working on the next case', Personality.Thinking)
      ],
      Category.TF
    )
  ]

  private UserChoices: UserChoice[] = []

  get characters() {
    return this.Characters
  }

  get userChoices() {
    return this.UserChoices
  }

  get questions() {
    return this.Questions
  }

  @Action
  public updateUserChoices(userChoice: UserChoice) {
    this.setUserChoices(userChoice)
  }

  @Action
  public restart() {
    this.resetUserChoices()
  }

  @Mutation
  public setUserChoices(userChoice: UserChoice) {
    this.UserChoices.push(userChoice)
  }

  @Mutation
  public resetUserChoices() {
    this.UserChoices = []
  }
}
