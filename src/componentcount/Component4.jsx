import React from 'react'
import { Maincom } from '../Structrue/Maincom';
export const Component4 = () => {
  const codesnip = {
    java: `public class Singleton {

        // Private static instance variable
       
    
        // Private constructor to prevent instantiation from outside
        private () {}
    
        // Public static method to get the singleton instance
        public static Singleton getInstance() {
            // Lazy initialization: create the instance only when it's accessed for the first time
            if (instance == null) {
                instance = new Singleton();
            }
            return instance;
        }
    
        // Example method of the singleton class
        public void showMessage() {
            System.out.println("Hello, I am a singleton!");
        }
    
        public  void main(String[] args) {
            // Get the singleton instance
            Singleton singleton = Singleton.getInstance();
    
            // Call a method of the singleton instance
            singleton.showMessage();
        }
    }
    
    `}
    const answer ={
      java:`public class Singleton {

        // Private static instance variable
        private static Singleton instance;
    
        // Private constructor to prevent instantiation from outside
        private Singleton() {}
    
        // Public static method to get the singleton instance
        public static Singleton getInstance() {
            // Lazy initialization: create the instance only when it's accessed for the first time
            if (instance == null) {
                instance = new Singleton();
            }
            return instance;
        }
    
        // Example method of the singleton class
        public void showMessage() {
            System.out.println("Hello, I am a singleton!");
        }
    
        public static void main(String[] args) {
            // Get the singleton instance
            Singleton singleton = Singleton.getInstance();
    
            // Call a method of the singleton instance
            singleton.showMessage();
        }
    }
    
    `}
    
  return (
    <>

    <Maincom  title={"Design Patterns"}
    answer={answer}
    game={"https://html-classic.itch.zone/html/2361181/td1.0.3/index.html"}
    url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/ea90d5b71c1de9ca63/4edd0d41b72ec4f9'}
       steps={['Starting the Game : Run the TowerDefenseGame class as the main class to start the game.',
       
       'Placing Cannons : Use the Factory Method Pattern to create different types of cannons (e.g., BasicCannon, AdvancedCannon).Place cannons strategically along the enemy path to attack incoming enemies.',
       
       'Managing Resources : Implement the Singleton Pattern to ensure one instance of the game manager.The game manager keeps track of resources (e.g., currency) for building and upgrading cannons.',
       
       'Enemy Waves : Enemies spawn in waves, moving towards the destination.Use the Observer Pattern to notify cannons when enemies enter their range',
       
       'Upgrading Cannons : Employ the Decorator Pattern to enhance cannons with abilities or upgrades.Players use available resources to upgrade cannons, improving attack power, range, or special abilities.',
       
       'Cannon Strategies : Apply the Strategy Pattern to define different attack strategies for cannons.Cannons can utilize strategies such as single-target attack, area-of-effect attack, or rapid-fire attack.',
       
       'Special Abilities : Integrate the Command Pattern to implement cannon upgrade commands.Players execute upgrade commands to enhance cannon properties.',
       
       'Cannon States : Utilize the State Pattern to manage cannon states (e.g., idle, attacking, upgrading).Cannons transition between states based on their actions and game events.',
     
       ]}
       codesnip={codesnip}
       />
    
    </>
  )
}
