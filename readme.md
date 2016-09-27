Quick Sort:
Quick Sort breaks up the set of numbers into smaller sets by comparing a 'pivot' number and sorts larger numbers to the right and smaller numbers to the left, creating new data sets.
It does it repeatedly until there are only single sets of data left.
When it reaches the end, it readds all the numbers to a single dataset again in order from left to right.

Create a function for quickSort
declare varibles for pivot, left, and right data sets
make a base case for when the array length is = 0
loop through the objects in the data set to push to the left or right array
return the new array.

Worse Case scenario: where the array is already sorted, in descending order, or when you always grab the largest or smallest number of a set.

Best Case scenario: when you always grab the middle number, allowing you to use the minimum amount of call stacks.


Bubble Sort:
Bubble Sort, sorts numbers by having the largest number 'bubble' to the end of the data set.
This continues until the numbers are in order from smallest to largest.

create a function for bubble sort
declare variables for swapcount, number or value to compare, a flag for when your while loop will stop.
Start while loop using flag on argument
do a for loop to loop through the array, compare the start of the array to the next value
if larger, replace previous index of the array with current variable, set current spot in the array to the compared variable.

Worse Case scenario: where the largest number is at the beginning.

Best Case scenario: where the array is already sorted, it will go through the array once.


Merge Sort:
Merge sort splits the data set in half, until there is one set of data each.
Then merge sort compares the 2 numbers and sorts them in order.
Merge sort goes back up until you reach the full size of the array, while adding each set of data in order.

create a function for merge sort
start loop to separate data until there is one set of data
compare those sets of data with each other to see which one is larger and order the set
return sorted array

Worse Case scenario: Where you handle a large amount on data

Insertion Sort:
Insertion Sort compares each number to the next number and inserts itself into the correct position where it is larger than the previous number, but smaller than the next number.

create a function for insertion sort
start a loop to insert lowest number into the first position in the array
then look for the next smallest number and move that to the next point in the array
return array

Worse Case scenario: Large dataset, where you would have to query a large amount of data to insert the data.

Best Case scenario: already in order, there doesnt need to be any changes, but needs to be iterated through once to check order of array.

Selection Sort:
Selection Sort iterates through the set of numbers and looks for the smallest number and swaps places in the data set.
It then goes through the set of number again, adding the next smallest number after the first number, while swapping values with the replaced value.

create a function for selection sort
create a loop to go through the array to set the smallest numbers in order by swapping the indexes.

