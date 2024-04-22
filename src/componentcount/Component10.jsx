import React from 'react'
import { Maincom } from '../Structrue/Maincom'
export const Component10 = () => {
  const codesnip = {
    java: `import java.util.ArrayList;
    
    
    public class PerformanceOptimizationExample {
    
        public static void main(String[] args) {
            // Generate a large list of integers
            List<Integer> numbers = generateNumbers(1000000);
    
            // Calculate the sum of all even numbers in the list
           
            System.out.println("Sum of even numbers: " + sum);
            System.out.println("Time taken: " + (endTime - startTime) + " milliseconds");
        }
    
        // Method to generate a list of random integers
        private static List<Integer> generateNumbers(int size) {
            List<Integer> numbers = new ArrayList<>();
           (int i = 0; i < size; i++) {
                numbers.add((int) (Math.random() * 100));
            }
            return numbers;
        }
    
        // Method to calculate the sum of all even numbers in a list
        private static long calculateSumOfEvenNumbers(List<Integer> numbers) {
            long sum = 0;
            for (int number : numbers) {
                if (number % 2 == 0) {
                    sum += number;
                }
            }
            return sum;
        }
    }
    
    
    `}
    const answer = {
      java: `\n
      import java.util.ArrayList;
import java.util.List;

public class PerformanceOptimizationExample {

    public static void main(String[] args) {
        // Generate a large list of integers
        List<Integer> numbers = generateNumbers(1000000);

        // Calculate the sum of all even numbers in the list
        long startTime = System.currentTimeMillis();
        long sum = calculateSumOfEvenNumbers(numbers);
        long endTime = System.currentTimeMillis();
        System.out.println("Sum of even numbers: " + sum);
        System.out.println("Time taken: " + (endTime - startTime) + " milliseconds");
    }

    // Method to generate a list of random integers
    private static List<Integer> generateNumbers(int size) {
        List<Integer> numbers = new ArrayList<>();
        for (int i = 0; i < size; i++) {
            numbers.add((int) (Math.random() * 100));
        }
        return numbers;
    }

    // Method to calculate the sum of all even numbers in a list
    private static long calculateSumOfEvenNumbers(List<Integer> numbers) {
        long sum = 0;
        for (int number : numbers) {
            if (number % 2 == 0) {
                sum += number;
            }
        }
        return sum;
    }
}

      `}
  return (
    <>
    
    <Maincom  title={"Performance Optimization"}
       codesnip={codesnip}
       game={"https://gunaasin.github.io/rabitrunPerformanceOptimization/"}
       url={'https://videoconsole-lac.vercel.app/'}
    steps={[' Optimization Techniques: After identifying bottlenecks, optimization techniques are applied to improve performance. These techniques can vary depending on the nature of the bottleneck but may include:',

    '--> Algorithmic Optimization: Improving the efficiency of algorithms to reduce time complexity and optimize resource usage.',
    '--> Data Structures: Choosing appropriate data structures that offer fast insertion, deletion, and retrieval operations.',
    '--> Concurrency: Utilizing concurrency and parallelism to execute tasks simultaneously and make better use of multi-core processors.',
    '--> Caching: Introducing caching mechanisms to store frequently accessed data and reduce the need for expensive computations or database queries',
    '--> I/O Optimization: Optimizing disk I/O operations by minimizing disk reads and writes or using asynchronous I/O.',
'Step 1: Use the formula for the sum of squares of the first n natural numbers: (n * (n + 1) * (2 * n + 1)) / 6.',
'Step 2: Test the optimized function',
'Step 3: If the function is called multiple times with the same input, you can cache the results to avoid redundant calculations.+',
'Consider browser-specific optimizations, such as using the latest ECMAScript features, leveraging browser-specific APIs for performance, or optimizing DOM manipulation.'
]}
answer={answer}
/>
    </>
  )
}
