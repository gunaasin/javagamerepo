import React from 'react'
import { Maincom } from '../Structrue/Maincom'
export const Component6 = () => {
  const codesnip = {
    java: `public class Main {
      public void main(String[] args) {
          // Implicit type casting (Widening Conversion)
          int numInt = 10;
           // Automatically converts int to double
          System.out.println("numInt: " + numInt);
          System.out.println("numDouble: " + numDouble);
  
          // Explicit type casting (Narrowing Conversion)
          double doubleNum = 20.5;
          int intNum = doubleNum; // Explicitly converts double to int
          System.out.println("doubleNum: " + doubleNum);
          System.out.println("intNum: " + intNum);
      }
  }
  
    `}
    const answer ={
      java:`public class Main {
        public static void main(String[] args) {
            // Implicit type casting (Widening Conversion)
            int numInt = 10;
            double numDouble = numInt; // Automatically converts int to double
            System.out.println("numInt: " + numInt);
            System.out.println("numDouble: " + numDouble);
    
            // Explicit type casting (Narrowing Conversion)
            double doubleNum = 20.5;
            int intNum = (int) doubleNum; // Explicitly converts double to int
            System.out.println("doubleNum: " + doubleNum);
            System.out.println("intNum: " + intNum);
        }
    }
      `}
  return (
    <>

      <Maincom title={"Type Casting"}
game={"https://html-classic.itch.zone/html/9663787/index.html"}

url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/0690d5b71c1ce1c78f/b4daf12e72d319a5'}
        steps={['Imagine a superhero game where your character has different types of energy levels based on the enemies they face. These energy levels are stored as different data types Stamina small power boosts, stored as int Magic Power (medium-level abilities, stored as double).Knight Selection  :xPlayers choose a knight character to control in the arena. Each knight has different attributes such as health points, attack power, and special abilities.',
          
          'Monster Encounter  : The knight encounters different types of monsters in the arena, each with its own strengths, weaknesses, and abilities.Monsters may attack the knight using various attacks or special abilities.',
          
          'Battle Phase  : Players command the knight to attack monsters using their weapon or use special abilities to defeat them. Monsters retaliate by attacking the knight, reducing its health points.',
          
          'Victory Condition  : The battle continues until either the knight defeats all monsters or the knights health points are reduced to zero.If the knight defeats all monsters, the player wins and earns rewards. If the knight is defeated, the player loses the game.',
        ]}
        codesnip={codesnip}
        answer={answer}
      />

    </>
  )
}
