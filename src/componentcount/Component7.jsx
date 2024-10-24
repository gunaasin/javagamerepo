import React from 'react'
import { Maincom } from '../Structrue/Maincom'
export const Component7 = () => {
    const codesnip = {
        java: `public class MathOperations {
        // Method to add two integers
        public int add(int a, int b) {
            return a + b;
        }
    
        // Method to add three integers
        public int add(int a, int b, int c) {
            return a + b + c;
        }
    
        // Method to add two doubles
        public double add(double a, double b) {
            return a + b;
        }
    
        // Method to concatenate two strings
        public String add(String a, String b) {
            return a + b;
        }
        
        // Method to add two integers and one double
        public double add(int a, int b, double c) {
            return a + b + c;
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            MathOperations math = new MathOperations();
    
            // Calling overloaded methods
            System.out.println("Addition of two integers: " + math.add(5, 3));
            System.out.println("Addition of three integers: " + math.add(5, 3, 2));
            System.out.println("Addition of two doubles: " + math.add(2.5, 3.5));
            System.out.println("Concatenation of two strings: " + math.add("Hello, ", "World!"));
            System.out.println("Addition of two integers and one double: " + math.add(5, 3, 2.5));
        }
    }
    
    
    `}
    const answer = {
        java: `public class MathOperations {
        // Method to add two integers
        public int add(int a, int b) {
            return a + b;
        }
    
        // Method to add three integers
        public int add(int a, int b, int c) {
            return a + b + c;
        }
    
        // Method to add two doubles
        public double add(double a, double b) {
            return a + b;
        }
    
        // Method to concatenate two strings
        public String add(String a, String b) {
            return a + b;
        }
        
        // Method to add two integers and one double
        public double add(int a, int b, double c) {
            return a + b + c;
        }
    }
    
    public class Main {
        public static void main(String[] args) {
            MathOperations math = new MathOperations();
    
            // Calling overloaded methods
            System.out.println("Addition of two integers: " + math.add(5, 3));
            System.out.println("Addition of three integers: " + math.add(5, 3, 2));
            System.out.println("Addition of two doubles: " + math.add(2.5, 3.5));
            System.out.println("Concatenation of two strings: " + math.add("Hello, ", "World!"));
            System.out.println("Addition of two integers and one double: " + math.add(5, 3, 2.5));
        }
    }
    
      `}
    return (
        <>
            <Maincom title={"Method Overloading"}
                game={"https://html-classic.itch.zone/html/4203615/index.html"}

                url={'https://videoconsole-lac.vercel.app/?url=https://videos.sproutvideo.com/embed/ac90d5b71c1ce1c525/38814a397a683858'}
                steps={[
                    'Let’s consider a weapon crafting system in a game to demonstrate method overloading. Players can craft different types of weapons with varying levels of complexity, from crafting a basic weapon to creating enhanced or custom weapons with special materials.',

                    'Game Scenario for Method Overloading (Weapon Crafting System):',
                    'In this scenario, the player can:',

                    'Craft a basic weapon (no parameters, just a simple crafting process).',
                    'Craft a weapon with specific material (with one parameter indicating the material type).',
                    'Craft a weapon with custom material and damage (with parameters for material and desired damage output).',
                    'By using method overloading, the weapon crafting system can handle different levels of crafting complexity.',
                    'Choose a weapon to craft',

                    'Follow the prompts to select materials and attributes for the chosen weapon.',

                    'Receive a message indicating the completion of the crafting process.',

                    'The game ends after crafting the weapon.',


                ]}
                codesnip={codesnip}
                answer={answer}
            />

        </>
    )
}
