// // // var myMap = new Map();
// // // myMap.set(1,"One");
// // // myMap.set(2,"Two");
// // // myMap.set(3,"Three");
// // // myMap.set(4,"Four");


// // // console.log(myMap);

// // // // for(let key of myMap.keys()){
// // // //     console.log(`Key is ${key}`);
// // // // }

// // // // for(let value of myMap.values()){
// // // //     console.log(`Value is ${value}`);
// // // // }

// // // for(let [key, value] of myMap){
// // //     console.log(`Key is: ${key} and Value is ${value}`);   
// // // }

// // // myMap.forEach((value, key) => console.log(`Value is ${value}, Key is ${key}`)); 
// // // //No matter in .foreach() loop we get values first and only if we required we can assign key, by default we get only value

// // // myMap.delete(2);
// // // console.log(myMap);
// // // // function check_armstrong(n){
// // // //      /*Function to check whether a number is an armstrong number or not
// // // //         Print true if yes else false */
// // // //         let sum = 0; let a = n
// // // //         while (a > 0) {
// // // //                 let x = a % 10;
// // // //                 let y = x * x * x;
// // // //                 sum = sum + y; 
// // // //                 a = Math.floor(a / 10);
// // // //         }
// // // //         if (sum == n) {
// // // //                 console.log("true");
// // // //         }
// // // //         else {
// // // //                 console.log("false");
// // // //         }
// // // // }

// // // // check_armstrong(154);

// // // // let i = 0;
// // // // let n = nums.length; let arr = [];
// // // // while(i<n){
// // // //         let j =1;
// // // //         while(j<n){
// // // //                 if(nums[i]+nums[j] == target){
// // // //                         arr.push(i);
// // // //                         arr.push(j);
// // // //                 }
// // // //                 j++;
// // // //         }

// // // //         i++;
// // // // }

// // // function missingNum(arr){
// // //     let n = arr.length+1; 
// // //     let actualSum = (n*(n+1))/2;
// // //     let sum = 0;
// // //     for(let i = 0; i<arr.length; i++){
// // //         sum = sum + arr[i];
// // //     }
// // //     let missingNum = actualSum - sum;

// // //     return missingNum;
// // // }


// // let myMap = new Map();
// // myMap.set(1,"one");
// // myMap.set(2,"two");
// // myMap.set(3,"three");

// // // console.log(myMap);
// // // for(let key of myMap){
// // //     console.log(`${key}`);
// // // }
// // for(let key of myMap.keys()){
// //     console.log(`Key is ${key}`);
// // }

// // for(let value of myMap.values()){
// //     console.log(`Value is ${value}`);
// // }


// // function luckyInteger(arr){
// //     let map = new Map(); let a = -1
// //     for(let i = 0; i<arr.length;i++){
// //         if(map.has(arr[i])){
// //             map.set(arr[i], map.get(arr[i])+1);
// //         }
// //         else{
// //             map.set(arr[i],1);
// //         }
// //     }

// //     for(let [key,value] of map){
// //         if(key == value){
// //             a = key;
// //             a = Math.max(a,key);
// //         }
// //     }

// //     return a;
// // }


// // class Node{
// //     constructor(data){
// //         this.data = data;
// //         this.next = null;
// //     }
// // }

// // class linkedList{
// //     constructor(){
// //         this.head = null;
// //     }


// //     addFirst(data){
// //         let newNode = new Node(data);
// //         newNode.next = this.head
// //         this.head = newNode;
// //     }

// //     addLast(data){
// //         let newNode = new Node(data);
// //         if(this.head === null){
// //             this.head = newNode;
// //             return;
// //         }

// //         let current = this.head;
// //         while(current.next){
// //             current = current.next;
// //         }
// //         current.next = newNode;
// //     }

// //     size(){
// //         let count = 0;
// //         let current = this.head;
// //         while(current){
// //             count = count + 1;
// //             current = current.next;
// //         }
// //         return count;
// //     }

// //     addAtPosition(data,index){
// //         if(index < 0 || index > this.size()){
// //             console.error("Inavlid Index");
// //             return;
// //         }

// //         let newNode = new Node(data);
// //         if(index === 0){
// //             newNode.next = this.head
// //             this.head = newNode;
// //             return;
// //         }

// //         let current = this.head;
// //         for(let i = 0; i<index-1; i++){
// //             current = current.next;
// //         }
// //         newNode.next = current.next;
// //         current.next = newNode;
// //     }


// //     removeTop(){
// //         if(this.head === null){
// //             console.error("LinkedList is empty");
// //             return;
// //         }
// //         this.head = this.head.next;
// //     }

// //     removeLast(){
// //         if(this.head === null){
// //             console.error("LinkedList is empty");
// //             return;
// //         }
// //         let current = this.head;
// //         while(current.next.next){
// //             current = current.next;
// //         }
// //         current.next = null;

// //     }

// //     removeAtIndex(index){
// //         if(index < 0 || index > this.size()){
// //             console.log("Invalid Index");
// //             return;
// //         }

// //         if(index === 0){
// //             this.head = this.head.next;
// //             return;
// //         }

// //         let current = this.head;
// //         for(let i = 0; i<index-1;i++){
// //             current = current.next;
// //         }
// //         if(current.next){
// //             current.next = current.next.next;
// //         }
// //     }

// //     print(){
// //         let current = this.head;
// //         while(current){
// //             console.log(current.data);
// //             current = current.next
// //         }
// //     }
// // }



// // // Node class
// // class Node {
// //   constructor(data) {
// //     this.data = data;
// //     this.next = null;
// //   }
// // }

// // // LinkedList class
// // class LinkedList {
// //   constructor() {
// //     this.head = null;
// //   }

// //   // Add element at the beginning
// //   addFirst(data) {
// //     const newNode = new Node(data);
// //     newNode.next = this.head;
// //     this.head = newNode;
// //   }

// //   // Add element at the end
// //   addLast(data) {
// //     const newNode = new Node(data);
// //     if (!this.head) {
// //       this.head = newNode;
// //       return;
// //     }
// //     let current = this.head;
// //     while (current.next) {
// //       current = current.next;
// //     }
// //     current.next = newNode;
// //   }

// //   // Get size of the list
// //   size() {
// //     let count = 0;
// //     let current = this.head;
// //     while (current) {
// //       count++;
// //       current = current.next;
// //     }
// //     return count;
// //   }

// //   // Add element at specific index
// //   addAt(data, index) {
// //     if (index < 0 || index > this.size()) {
// //       console.error("Invalid Index");
// //       return;
// //     }

// //     const newNode = new Node(data);

// //     if (index === 0) {
// //       newNode.next = this.head;
// //       this.head = newNode;
// //       return;
// //     }

// //     let current = this.head;
// //     for (let i = 0; i < index - 1; i++) {
// //       current = current.next;
// //     }

// //     newNode.next = current.next;
// //     current.next = newNode;
// //   }

// //   // Remove first element
// //   removeTop() {
// //     if (!this.head) return;
// //     this.head = this.head.next;
// //   }

// //   // Remove last element
// //   removeLast() {
// //     if (!this.head) return;

// //     if (!this.head.next) {
// //       this.head = null;
// //       return;
// //     }

// //     let current = this.head;
// //     while (current.next.next) {
// //       current = current.next;
// //     }
// //     current.next = null;
// //   }

// //   // Remove element at specific index
// //   removeAt(index) {
// //     if (index < 0 || index >= this.size()) {
// //       console.error("Invalid Index");
// //       return;
// //     }

// //     if (index === 0) {
// //       this.head = this.head.next;
// //       return;
// //     }

// //     let current = this.head;
// //     for (let i = 0; i < index - 1; i++) {
// //       current = current.next;
// //     }

// //     if (current.next) {
// //       current.next = current.next.next;
// //     }
// //   }

// //   // Print the list
// //   print() {
// //     let current = this.head;
// //     let output = "";
// //     while (current) {
// //       output += current.data + " → ";
// //       current = current.next;
// //     }
// //     console.log(output + "null");
// //   }

// //   // Optional: Check if list is empty
// //   isEmpty() {
// //     return this.head === null;
// //   }
// // }


// // const list = new LinkedList();
// // list.addLast("A");
// // list.addLast("B");
// // list.addLast("C");
// // list.print();       // A → B → C → null

// // list.addAt("X", 1);
// // list.print();       // A → X → B → C → null

// // list.removeAt(2);
// // list.print();       // A → X → C → null

// // list.removeLast();
// // list.print();       // A → X → null

// // list.removeTop();
// // list.print();       // X → null



// // function fun(head, value){
// //     const dummy = new Node(0);
// //     dummy.next = head;

// //     let current = dummy;
// //     while(current.next !== null){
// //         if(current.next.data === value){
// //             current.next = current.next.next;
// //         }
// //         else{
// //             current = current.next; 
// //         }
// //     }
// //     return dummy.next;
// // }

// // function func(headA, headB){
// //     let A = headA;
// //     let B = headB;
// //     while(A !== B){
// //         A = A? A.next:headB;
// //         B = B? B.next:headA;
// //     }

// //     return A;
// // }


// // function fun(head){
// //     let vals = [];
// //     while(head){
// //         vals.push(head.val);
// //         head.next;
// //     }

// //     let left = 0;
// //     let right = vals.length-1;
// //     while(left<right){
// //         if(vals[left] !== vals[right]){
// //             return false;
// //             left++; right--;
// //         }
// //         else{
// //             return true;
// //         }
// //     }
// // }


// // function fun(head){
// //     let curr = head;
// //     let prev = null;
// //     while(curr !== null){
// //         let next = curr.next;
// //         curr.next = prev;
// //         prev = curr;
// //         curr = next;
// //     }

// //     return prev;

// // }


// // function factorial(n){
// //     if(n<0){
// //         return console.error("Negative number");
// //     }
// //     if(n === 0 || n === 1){
// //         return 1;
// //     }
// //     return n*factorial(n-1);
// // }

// // console.log(factorial(5));


// // function range(m,n){
// //      if(n < m){
// //         return [];
// //      }
// //      else{
// //         const numbers = range(m,n-1);
// //         numbers.push(n);
// //         return numbers;
// //      }
// // }

// // console.log(range(0,5));

// // function sum(n){
// //     if(n === 0){
// //         return 0;
// //     }

// //     return n + sum(n-1);
// // }

// // console.log(sum(5));


// // class Member extends User {
// //   constructor(username, email, password) {
// //     super(username, email, password); // ✅ completed super call

// //     this.membershipactivetilldate = new Date(2023, 2, 3); // March 3, 2023
// //     this.package = '';
// //   }

// //   purchaseMembership(membershippackagename) {
// //     this.package = membershippackagename;

// //     if (membershippackagename === "Monthly") {
// //       this.membershipactivetilldate.setMonth(this.membershipactivetilldate.getMonth() + 1);
// //     } else if (membershippackagename === "Yearly") {
// //       this.membershipactivetilldate.setFullYear(this.membershipactivetilldate.getFullYear() + 1);
// //     }
// //   }

// //   subscriptionActiveTill() {
// //     console.log(
// //       this.username +
// //         " is subscribed to " +
// //         this.package +
// //         " uptill " +
// //         this.membershipactivetilldate.toDateString()
// //     );
// //   }
// // }


// // function binarySearch(arr, k) {
// //   let l = 0;
// //   let r = arr.length - 1;
// //   while (l <= r) {


// //     let m = Math.floor((l + r) / 2);

// //     if (arr[m] === k) {
// //       return m;
// //     }
// //     else if (arr[m] > k) {
// //       r = m - 1;
// //     }
// //     else if (arr[m] < k) {
// //       l = m + 1;
// //     }
// //   }

// //   return -1;
// // }
// // let arr = [3,6,8,12,14,17,25,29,31,42,47,53,55,62];
// // let k = 29;
// // console.log(binarySearch(arr,k));
// // console.log(binarySearch(arr,27));

// // function bubbleSort(arr) {
// //   let n = arr.length;
// //   for (let i = 0; i < n; i++) {
// //     for (let j = 0; j < n - i; j++) {
// //       if (arr[j] > arr[j + 1]) {
// //         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
// //       }
// //     }
// //   }
// //   return arr;
// // }


// let arr = [29, 10, 14, 37, 14];
// console.log(selectionSort(arr));

// // function selectionSort(arr){
// //   for(let i = 0; i<arr.length; i++){
// //     let minIdx = i;
// //     for(let j = i+1; j<arr.length; j++){
// //       if(arr[j]<arr[minIdx]){
// //         minIdx = j;
// //       }
// //     }
// //     if(minIdx !== i){
// //       let temp = arr[i];
// //        arr[i] = arr[minIdx];
// //       arr[minIdx] = temp;
// //     }
// //   }
// //   return arr;
// // }



// // function selectionSort(arr){
// //   for(let i = 0; i<arr.length; i++){
// //     let minIdx = i;
// //     for(let j = i +1; j<arr.length; j++){
// //       if(arr[j]<arr[minIdx]){
// //         minIdx = j;
// //       }
// //     }
// //     if(minIdx !== i){
// //       let temp = arr[i];
// //       arr[i] = arr[minIdx];
// //       arr[minIdx] = temp;
// //     }
// //   }
// //   return arr;
// // }


// // function selectionSort(arr){
// //   for(let i = 0; i<arr.length; i++){
// //     let minIdx = i;
// //     for(let j = i+1; j<arr.length; j++){
// //       if(arr[j]<arr[minIdx]){
// //         minIdx = j;
// //       }
// //     }

// //     if(minIdx !== i){
// //       let temp = arr[i];
// //       arr[i] = arr[minIdx];
// //       arr[minIdx] = temp;
// //     }
// //   }
// // }

// // function insertionSort(arr){
// //   for(let i = 1; i<arr.length; i++){
// //     let key = arr[i]; let j = i-1;
// //     while(j>=0 && arr[j]>key){
// //       arr[j+1] = arr[j];
// //       j--;
// //     }
// //     arr[j+1] = key;
// //   }
// //   return arr;
// // }

// // function bubbleSort(arr){
// //   for(let i = 0; i<arr.length; i++){
// //     for(let j = 0; j<arr.length-i; j++){
// //       if(arr[j+1]>arr[j]){
// //         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
// //       }
// //     }
// //   }
// //   return arr;
// // }


// // function selectionSort(arr){
// //   for(let i = 0; i<arr.length; i++){
// //     let minIdx = i;
// //     for(let j = i+1; j<arr.length; j++){
// //       if()
// //     }
// //   }
// // }


// // function bubbleSort(arr){
// //     for(let i = 0; i<arr.length; i++){
// //         for(let j = 0; j<arr.length-i; j++){
// //             if(arr[j]>arr[j+1]){
// //                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
// //             }
// //         }
// //     }
// //     return arr;
// // }

// // function insertionSort(arr){
// //     for(let i = 1; i<arr.length; i++){
// //         let key = arr[i]; let j = i-1;
// //         while(j>=0 && arr[j]>key){
// //             arr[j+1] = arr[j];
// //             j--;
// //         }
// //         arr[j+1] = key;
// //     }
// //     return arr;
// // }

// // function selectionSort(arr){
// //     for(let i = 0; i<arr.length; i++){
// //         let minIdx = i;
// //         for(let j = i+1; j<arr.length; j++){
// //             if(arr[j]<arr[minIdx]){
// //                 minIdx = j;
// //             }
// //         }

// //         if(minIdx !==i){
// //             let temp = arr[i];
// //             arr[i] = arr[minIdx];
// //             arr[minIdx] = temp;
// //         }
// //     }
// //     return arr;
// // }

// function twoSum(arr, target) {
//     let myMap = new Map();
//     for (let i = 0; i < arr.length; i++) {
//         let num1 = arr[i]; let num2 = target - num1;
//         if (myMap.has(num2)) {
//             return [i, myMap.get(num2)];
//         }
//         myMap.set(num1, i);
//     }
// }

// function luckyInt(arr) {
//     let map = new Map(); let a = -1;

//     for (let i = 0; i < arr.length; i++) {
//         if (myMap.has(arr[i])) {
//             myMap.set(arr[i]), myMap.get(arr[i] + 1);
//         }
//         else {
//             myMap.set(arr[i], i);
//         }
//     }
//     for (let [key, value] of map) {
//         if (key == value) {
//             a = Math.max(a, key);
//         }
//     }
//     return a;
// }

// function objArr(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i; j++) {
//             if (arr[j].get() > arr[j + 1].get()) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr;
// }

// 'use strict';
// process.stdin.setEncoding('utf-8');
// class Employee
// {
//     constructor(name,salary)
//     {
//         this.name=name;
//         this.salary =salary;
//     }
// }
// //Dont change the above code.
// /**
//  * @param {Employee[]} arr
//  * @param {number} length
//  * @return {Employee[]}
//  */
// function sort_array(arr,length){
// /*Function to sort the array in ascending order
// After sorting return the sorted array */
//     for (let i = 0; i < length - 1; i++){
//         for (let j = 0; j < length - i - 1; j++){
//             if (arr[j].salary > arr[j + 1].salary) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;    
// }


// class stack{
//     constructor(){
//         this.stack = [];
//     }
//     push(element){
//         this.stack.push(element);
//     }
//     pop(){
//         if(this.isEmpty){
//             console.error("Stack is empty");
//         }
//         else{
//             this.stack.pop();
//         }
//     }
//     isEmpty() {
//         if (this.stack.length === 0) {
//             return true;
//         }
//         return false;
//     }
//     size(){
//         return this.stack.length;
//     }
//     peek(){
//         if(this.isEmpty){
//             console.log("Stack is Empty");
//         }
//         else{
//             return this.stack[this.stack.length-1];
//         }
//     }
// }


// class Queue{
//     constructor(){
//         this.Queue = new Array();
//     }
// }


// for(let i = 1; i<=5; i++){
//     let str = "";
//     for(let j =1; j<=6-i; j++){
//         str = str + "*";
//     }
//     for(let j = 2; j<=(2*i)-2; j++){
//         str = str + "1";
//     }
//     for(let j =1; j<=6-i; j++){
//         str = str + "*";
//     }
//     console.log(str);
// }




// for (let i = 1; i <= 5; i++) {
//     let str = "";
//     for (let j = 1; j <= 6 - i; j++) {
//         str = str + j;
//     }
//     for (let j = 1; j <= (2*i) - 2; j++) {
//         str = str + " ";
//     }
//     for (let j = 1; j <= 6 - i; j++) {
//         str = str + j;
//     }
//     console.log(str);
// }

// function insertionSort(arr) {
	// for(let i =1; i<arr.length; i++){
	// let key = arr[i];
	// let j = i-1;
	// while(j>=0 && arr[j]>key){
		// arr[j+1] = arr[j];
		// j--;
	// }
	// arr[j+1] = key;
	// }
	// return arr;
// }

// console.log(insertionSort([2,1,5,3,4]));

// function selectionSort(arr){
	// for(let i = 0; i<arr.length; i++){
		// let minIdx  = i;
		// for(let j = i + 1; j<arr.length; j++){
			// if(arr[minIdx]>arr[j]){
				// minIdx = j;
			// }
		// }
	
	// if(minIdx !== i){
		// [arr[i],arr[minIdx]] = [arr[minIdx],arr[i]];
	// }
	// }
	// return arr;
// }
// console.log(selectionSort([2,1,3,5,4]));


// function rotate(arr,k){
	// k = k%arr.length;
	// reverse(arr,0,arr.length-1);
	// reverse(arr,0,k-1);
	// reverse(arr,k,arr.length-1);
	// return arr;
// }
// function reverse(arr,start,end){
	// while(start<end){
		// [arr[start],arr[end]] = [arr[end],arr[start]];
		// start = start + 1;
		// end = end - 1;
	// }
// }

// let arr = [1,2,3,4,5];
// console.log(rotate(arr,1));



	



// class queue{
	// constructor(){
		// this.queue = new Array();
	// }
	// enqueue(element){
		// this.queue.push(element);
	// }
	// dequeue(){
		// this.queue.shift();
	// }
	// peek(){
		// console.log(this.queue[0]);
	// }
// }

// class stacks{
	// constructor(){
		// this.stack = new Array();
	// }
	// push(element){
		// return this.stack.push(element);
	// }
	// pop(){
		// return this.stack.pop();
	// }
	// peek(){
		// return this.stack[size-1];
	// }
	// size(){
		// return this.stack.length;
	// }
	// isEmpty(){
		// if(size === 0){
			// return true;
		// }
		// else return false;
	// }
	
// }

// function secondMaximum(arr){
	// let firstMax = -Infinity;
	// let secondMax = -Infinity;
	// for(let i = 0; i<arr.length; i++){
		// if(arr[i]>firstMax){
			// secondMax = firstMax;
			// firstMax = arr[i];
		// }
		// else if(arr[i]>secondMax && arr[i]<firstMax){
			// secondMax = arr[i];
		// }
	// }
	// return secondMax === -Infinity? null:secondMax;
// }

// console.log(secondMaximum([12,35,1,10,34,1]));



// function twoSum(arr){
	// let myMap = new Map();
	// for(let i = 0; i<arr.length; i++){
		// let num1 = arr[i];
		// let num2 = target - num1;
		// if(myMap.has(num2)){
			// return [i, map.get(num2)]]
		// }
		// else {
			// myMap.set(arr[i],i);
		// }
	// }
// }


// function func(arr){
// 	let mySet = new Set(); let indx = Infinity;
// 	for(let i = arr.length-1; i>=0; i--){
// 		if(mySet.has(arr[i])){
// 			indx = Math.min(indx,i);
// 		}
// 		mySet.add(arr[i]);
// 	}
// 	return indx === Infinity? -1:indx+1;
// }

// console.log(func([1, 5, 3, 4, 3, 5, 6]));


// console.log("Hello World!!");


// function duplicateArrya(arr1, arr2){

// 	if(arr1.length !== arr2.length){
// 		return false;
// 	}
// 	let myMap = new Map();
// 	let count = 0;


// 	for(let i = 0; i<arr1.length; i++){
// 		myMap.set(arr1[i],i);
// 	}


// 	for(let i = 0; i<arr2.length; i++){
// 		if(myMap.has(arr2[i])){
// 			count = count + 1;
// 		}
// 	}

// 	if(count === arr2.length-1){
// 		return true;
// 	}
// }

// function duplicateArray(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }

//     let map1 = new Map();
//     let map2 = new Map();

//     for(let val of arr1){
//         map1.set(val, (map1.get(val) || 0) + 1);
//     }

//     for(let val of arr2){
//         map2.set(val, (map2.get(val) || 0) + 1);
//     }

//     for(let [key, value] of map1){
//         if(map2.get(key) !== value){
//             return false;
//         }
//     }

//     return true;
// }

// let a = [1, 2, 5, 4, 0];
// let b = [2, 4, 5, 0, 1];
// console.log(areArraysEqual(a, b));


// function areArraysEqual(a, b) {
//     if (a.length !== b.length) return false;

//     const freqMap = new Map();

//     // Count frequencies in array a
//     for (let num of a) {
//         freqMap.set(num, (freqMap.get(num) || 0) + 1);
//     }

//     // Subtract frequencies using array b
//     for (let num of b) {
//         if (!freqMap.has(num)) return false;
//         freqMap.set(num, freqMap.get(num) - 1);
//         if (freqMap.get(num) < 0) return false;
//     }

//     return true;
// }


// function duplicateArray(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     let map1 = new Map();
//     let map2 = new Map();

//     for (let i = 0; i < arr1.length; i++) {
//         if (map1.has[arr1[i]]) {
//             map1.set(arr1[i], map1.get(arr1[i]) + 1);
//         } else { map1.set[arr1[i], 1]; }
//     }

//     for (let i = 0; i < arr2.length; i++) {
//         if (map2.has[arr2]) {
//             map2.set(arr2[i], map2.get(arr2[i]) + 1);
//         } else { map2.set[arr2[i], 1]; }
//     }

//     for (let [key, value] of map1) {
//         if (map2.get(key) !== value) {
//             return false;
//         }
//     }

//     return true;
// }


// function equalArray(a,b){
// 	if(a.length !== b.length){
// 		return false;
// 	}



// 	let freqMap = new Map();

// 	for(let i = 0; i<a.length; i++){
// 			freqMap.set(a[i], (freqMap.get(a[i]) || 0) + 1);
// 	}


// 	for(let i = 0; i<b.length; i++){
// 		if(!freqMap.has(b[i])){
// 			return false;
// 		}


// 		freqMap.set(b[i],freqMap.get(b[i])-1);

// 		if(freqMap.get(b[i])<0){
// 			return false;
// 		}
// 	}

// 	return true;
// }

// let a = [1, 2, 5, 4, 0];
// let b = [2, 4, 5, 0, 1];
// console.log(equalArray(a, b));


// function missingElement(arr){
// 	let num = 0;
// 	let n = arr.length;
// 	let first = arr[0];
// 	let last = arr[n-1];
// 	let commonDifference = (last - first)/n;
// 	for(let i = 0; i<arr.length; i++){
// 		if(arr[i+1] !== arr[i] + commonDifference){
// 			return arr[i]+commonDifference;
// 		}
// 	}
// 	return last+commonDifference;

// }

// let arr = [2, 4, 8, 10, 12, 14];
// console.log(missingElement(arr));



// function reverse(arr,start,end){
// 	while(start<end){
// 		[arr[start],arr[end]] = [arr[end],arr[start]];
// 		start++;
// 		end--;
// 	}
// }
// function rotate(arr,k){
// 	let n = arr.length;
// 	reverse(arr,0,n-1);
// 	reverse(arr,0,k-1);
// 	reverse(arr,k,n-1);
// 	return arr;

// }


// arr = [1,2,3,4,5];
// console.log((rotate(arr,1)));

// function sortBinaryArray(arr) {
//     let zeroIndex = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             // Swap 0 to the front
//             [arr[i], arr[zeroIndex]] = [arr[zeroIndex], arr[i]];
//             zeroIndex++;
//         }
//     }
//     return arr;
// }

// console.log(sortBinaryArray([1, 0, 1, 1, 0]));


// function negativeNumAtLast(arr){
// 	let result = new Array();
// 	for(let i = 0; i<arr.length; i++){
// 		if(arr[i]>=0){
// 			result.push(arr[i]);
// 		}
// 	}
// 	for(let i = 0;i<arr.length; i++){
// 		if(arr[i]<0){
// 			result.push(arr[i]);
// 		}
// 	}
// 	return result;
// }

// let arr = [1, -1, 3, 2, -7, -5, 11, 6 ];
// console.log(negativeNumAtLast(arr));

// function missingElement(arr){
// 	let n = arr.length+1;
// 	let actualSum = ((n)*(n+1))/2;
// 	let realSum = 0;
// 	let missingNum = 0;
// 	for(let i =0;i<arr.length;i++){
// 		realSum = realSum + arr[i];
// 	}
// 	missingNum = actualSum - realSum;
// 	return missingNum;
// }

// console.log(missingElement([1,2,3,4,5,6,8]));

// function totalFine(date, car, fine) {
// 	let sum = 0;
// 	if(date%2 === 0){
// 		for(let i =0; i<car.length; i++){
// 			if(car[i]%2 !==0){
// 				sum = sum + fine[i];
// 			}
// 		}
// 	}
// 	else{
// 		for(let i = 0; i<car.length; i++){
// 			if(car[i]%2 === 0){
// 				sum = sum + fine[i];
// 			}
// 		}
// 	}
// 	return sum;
// }

// let date = 12; 
// let car = [2375, 7682, 2325, 2352]; 
// let fine = [250, 500, 350, 200];

// let date = 8; 
// let car = [2222, 2223, 2224]; 
// let fine = [200, 300, 400];

// console.log(totalFine(date,car,fine));


// function greaterOnRightSide(arr){
// 	for(let i =0; i<arr.length; i++){
// 		let num = -1;
// 		for(let j = i+1; j<arr.length; j++){
// 			num = Math.max(num,arr[j]);
// 		}
// 		arr[i] = num;
// 	}
// 	return arr;
// }

// console.log(greaterOnRightSide([16,17,4,3,5,2]));


// function greaterOnRightSide(arr){
// 	let max = -1; let n = arr.length -1;
// 	for(let i = n; i>=0; i--){
// 		let current = arr[i];
// 		arr[i] = max;
// 		if(current>max){
// 			max = current;

// 		}
// 	}
// 	return arr;
// }

// function findEquilibriumPoint(arr) {
//   let totalSum = 0;

//   // Step 1: Calculate total sum manually
//   for (let i = 0; i < arr.length; i++) {
//     totalSum += arr[i];
//   }

//   let leftSum = 0;

//   // Step 2: Traverse and check for equilibrium
//   for (let i = 0; i < arr.length; i++) {
//     const rightSum = totalSum - leftSum - arr[i];
//     if (leftSum === rightSum) {
//       return i; // 0-based index
//     }
//     leftSum += arr[i];
//   }

//   return -1; // No equilibrium point found
// }


// function rearrangeAlternating(arr){
// 	let positive = new Array();
// 	let negative = new Array();

// 	for(let i = 0; i<arr.length; i++){
// 		if(arr[i]>=0){
// 			positive.push(arr[i]);
// 		}
// 		else{
// 			negative.push(arr[i]);
// 		}
// 	}

// 	let result = new Array();
// 	let i = 0; let j = 0;
// 	while(i<positive.length && j<negative.length){
// 		result.push(positive[i]); i++;
// 		result.push(negative[j]); j++;
// 	}

// 	while(i<positive.length){
// 		result.push(positive[i++]);
// 	}
// 	while(j<negative.length){
// 		result.push(negative[j++]);
// 	}
// 	return result;
// }
// console.log(rearrangeAlternating([9, 4, -2, -1, 5, 0, -5, -3, 2]));


// function sortedArrUnion(a,b){
// 	let preResult = new Array();
// 	preResult = [...a, ...b];
// 	let myset = new Set(preResult);
// 	let result = new Array(...myset);
// 	return result;
// }
// console.log(sortedArrUnion([1, 2, 3, 4, 5],[1, 2, 3, 6, 7]));


// function transistion(arr){
// 	for(let i = 0; i<arr.length; i++){
// 		if(arr[i] === 1){
// 			return i;
// 		}
// 	}
// 	return -1;
// }

// console.log(transistion([1, 1, 1]));



// function rotatedString(str){
// 	for(let i = 1 i<str.length; i++){
// 		if(alteredStr === str){
// 			return true;
// 		}
// 		reverse(alteredStr);
// 	}
// 	return false;
// }

// function reverse(str){
// 	let alteredStr = "";
	
// }




// function rotatedString(s1,s2){
// 	let temp = s1 + s1;
// 	if(s1.length !== s2.length){
// 		return false;
// 	}
// 	return temp.includes(s2);
// }

// s1 = "abcd", s2 = "cdab"
// console.log(rotatedString(s1,s2));


// function frequency(str){
// 	let myMap = new Map(); let freq = 0;
// 	for(let char of str){
// 		if(myMap.has(char)){
// 			myMap.set(char,myMap.get(char) + 1);
// 		}
// 		else{
// 			myMap.set(char,1);
// 		}
// 	}
// 	for(let value of myMap.values()){
// 		freq = Math.max(freq,value);
// 	}
// 	return freq;
// }

// console.log(frequency("testsample"));

// function maxOccurringChar(s) {
//     let freqMap = new Map();

//     // Step 1: Count frequencies
//     for (let char of s) {
//         freqMap.set(char, (freqMap.get(char) || 0) + 1);
//     }

//     // Step 2: Find max frequency and lexicographically smallest char
//     let maxFreq = 0;
//     let resultChar = null;

//     for (let [char, count] of freqMap) {
//         if (count > maxFreq || (count === maxFreq && char < resultChar)) {
//             maxFreq = count;
//             resultChar = char;
//         }
//     }

//     return resultChar;
// }

// function subString(s){
// 	let count = 0;
// 	for(let char of s){
// 		if(char === 1){
// 			count = count + 1;
// 		}
// 	}
// 	return (count*(count+1)/2);
// }

// function test(s1,s2){
// 	s1 = [...s1];
// 	s2 = [...s2];
// 	let str = new Array();
// 	let n = Math.max(s1.length+s2.length);
// 	for(let i = 0; i<n; i++){
// 		if(i<s1.length) str.push(s1[i]);
// 		if(i<s2.length) str.push(s2[i]);
// 	}

// 	return str.join('');
// }

// function test(s){
// 	let arr = new Array();
// 	s = s.split('.');
// 	for(let char of s){
// 		if(char !== ''){
// 			arr.push(char);
// 		}
// 	}
// 	return arr.reverse().join('.');
// }

// console.log(test("..home....."));

// var romanToInt = function(s) {
//     const values = {
//         'I': 1,
//         'V': 5,
//         'X': 10,
//         'L': 50,
//         'C': 100,
//         'D': 500,
//         'M': 1000
//     };

//     let total = 0;

//     for (let i = 0; i < s.length; i++) {
//         let current = values[s[i]];
//         let next = values[s[i + 1]];

//         if (next && current < next) {
//             total = total - current;  // subtractive case
//         } else {
//             total = total + current;  // normal case
//         }
//     }

//     return total;
// };
// console.log(romanToInt("III"));    // 3
// console.log(romanToInt("IV"));     // 4
// console.log(romanToInt("IX"));     // 9
// console.log(romanToInt("LVIII"));  // 58  (50 + 5 + 3)
// console.log(romanToInt("MCMXCIV"));// 1994 (1000 + 900 + 90 + 4)


// function countZeros(arr) {
//     let n = arr.length;
//     let low = 0, high = n - 1;
//     let firstZeroIndex = -1;

//     while (low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if (arr[mid] === 0) {
//             firstZeroIndex = mid;
//             high = mid - 1; // look for earlier zero
//         } else {
//             low = mid + 1;  // move right
//         }
//     }

//     if (firstZeroIndex === -1) return 0; // no zeros
//     return n - firstZeroIndex; // count of zeros
// }

// function nextSmallerElement(arr){
// 	let result = new Array(arr.length).fill(-1);
// 	for(let i = 0; i<arr.length; i++){
// 		for(let j = i + 1; j<arr.length; j++){
// 			if(arr[j]<arr[i]){
// 				result[i] = arr[j];
// 				break;
// 			}
// 		}
// 	}
// 	return result;
// }

// console.log(nextSmallerElement([13, 7, 6, 12]));



// function nextSmallerElement(arr) {
//   let n = arr.length;
//   let result = new Array(n).fill(-1);
//   let stack = [];

//   for (let i = n - 1; i >= 0; i--) {
//     while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
//       stack.pop();
//     }
//     if (stack.length > 0) {
//       result[i] = stack[stack.length - 1];
//     }
//     stack.push(arr[i]);
//   }
//   return result;
// }

// console.log(nextSmallerElement([4, 8, 5, 2, 25]));
// // [2, 5, 2, -1, -1]


// class myQueue {
//     constructor(n) {
//         // Define Data Structures
//         let queue1 = new Array();
//     }

//     isEmpty() {
//         // Check if stack is empty
//         if(queue1.length === 0){
//         	return true;
//         }
//         else return false;
//     }

//     isFull() {
//         // Check if stack is full
//         if(n.length === queue1.length) return true;
//         else return false;
//     }

//     push(x) {
//         // Push x at the top of the stack

//     }

//     pop() {
//         // Removes and element from the top of the stack
//     }

//     peek() {
//         // Returns the top element of the stack
//     }
// }



// class MyStack {
//     constructor(n) {
//         this.stack = new Array(n);  // fixed-size array
//         this.capacity = n;          // maximum size
//         this.top = -1;              // index of top element (-1 means empty)
//     }

//     // (i) push(x): Insert element at top
//     push(x) {
//         if (this.isFull()) {
//             console.log("Stack Overflow");
//             return;
//         }
//         this.top++;
//         this.stack[this.top] = x;
//     }

//     // (ii) pop(): Remove element from top
//     pop() {
//         if (this.isEmpty()) {
//             console.log("Stack Underflow");
//             return -1;
//         }
//         let popped = this.stack[this.top];
//         this.top--;
//         return popped;
//     }

//     // (iii) peek(): Return top element
//     peek() {
//         if (this.isEmpty()) {
//             return -1;
//         }
//         return this.stack[this.top];
//     }

//     // (iv) isEmpty(): Check if stack is empty
//     isEmpty() {
//         return this.top === -1;
//     }

//     // (v) isFull(): Check if stack is full
//     isFull() {
//         return this.top === this.capacity - 1;
//     }
// }

// function deleteMiddle(s, current = 0, size = stack.length){
// 	if(current === Math.floor((size+1)/2)-1){
// 		stack.pop();
// 		return;
// 	}

// 	let top = stack.pop();

// 	deleteMiddle(stack, current+1, size);

// 	stack.push(top);
// }

// function sortStackIterative(st) {
//     let tmp = [];
//     while (st.length > 0) {
//         let x = st.pop();
//         while (tmp.length > 0 && tmp[tmp.length - 1] > x) {
//             st.push(tmp.pop());
//         }
//         tmp.push(x);
//     }
//     // Transfer back to original stack
//     while (tmp.length > 0) {
//         st.push(tmp.pop());
//     }
//     return st;
// }

// // Example usage:
// let st = [34, 3, 31, 98, 92, 23];
// console.log(sortStackIterative(st)); // [3, 23, 31, 34, 92, 98]




// function missingElementInAP(arr){
// 	let n = arr.length;
// 	let diff1 = arr[1] - arr[0];
// 	let diff2 = arr[n-1] - arr[n-2];
// 	let diff3 = (arr[n-1] - arr[0])/n;
// 	let diff;

// 	if(diff1 === diff2){
// 		diff = diff1;
// 	}
// 	else if(diff1 === diff3){
// 		diff = diff1;
// 	}
// 	else diff = diff2;

// 	if(diff === 0) return arr[0];

// 	let l = 0; h = n-1;
// 	while(l<=h){
// 		let m = Math.floor((l+h)/2);
// 		let expected = arr[0] + m*diff;
// 		if(arr[m] === expected){
// 			l = m + 1;
// 		}
// 		else{
// 			h = m - 1;
// 		}

// 	}
// 	return arr[0]+l*diff;
// }


// console.log(missingElementInAP([2,4,8,10,12,14]));
// console.log(missingElementInAP([2,4,6,8,10,12,14]));



// function unshift(arr){
// 	let lastTerm = arr.pop();
// 	arr.unshift(lastTerm);
// 	return arr;
// }
// console.log(unshift([1,2,3,4,5]));


// function sort(arr){
// 	let s = 0; let e = arr.length-1;
// 	while(s<=e){
// 		if(arr[s] === 1 && arr[e] === 0){
// 			[arr[s],arr[e]] = [arr[e],arr[s]];
// 			s++; e--;
// 		}
// 		if(arr[s] === 0) s = s + 1;
// 		if(arr[e] === 1) e = e - 1;
// 	}
// 	return arr;
// }

// function removeDuplicate(arr){
// 	if(arr.length === 0) return arr;
// 	let j = 0;
// 	for(let i = 1; i<arr.length; i++){
// 		if(arr[i] !== arr[j]){
// 			j++;
// 			arr[j] = arr[i];
// 		}
// 	}
// }


// function equilibrium(arr){
// 	let n = arr.length;
// 	let sum = 0;
// 	for(let i = 0; i<n; i++){
// 		sum = sum + arr[i];
// 	}
// 	let sum2 = 0;
// 	let ans = -1;
// 	for(let i = 0; i<n; i++){
// 		sum = sum - arr[i];
// 		if(sum2 === sum){
// 			return i;
// 		}
// 		sum2 = sum2 + arr[i];
// 	}
// 	return -1;
// }

// function peakElement(arr){
// 	if(arr.length === 1) return 0;
// 	if(arr[0]>arr[1]) return 0;
// 	if(arr[arr.length-1]>arr[arr.length-2]) return arr.length-1;

// 	let l = 0; let h = arr.length-1;
// 	while(l<=h){
// 		let mid = Math.floor((l+h)/2);

// 		if(arr[mid-1]<arr[mid] && arr[mid]>arr[mid+1]){
// 			return mid;
// 		}
// 		if(arr[mid]<arr[mid+1]) l = mid + 1;
// 		else h = mid -1;

// 	}


// }


// function numOfZero(arr){
// 	let l = 0; let h = arr.length -1;
// 	let startIndex = -1;
// 	while(l<=h){
// 		let mid = Math.floor((l+h)/2);
// 		if(arr[mid] === 0){
// 			startIndex = mid;
// 			r = mid-1;
// 		}
// 		else{
// 			l = mid + 1;
// 		}
// 	}
// 	if(startIndex === -1) return 0;
// 	return arr.length - startIndex;
// }

// console.log(numOfZero([1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0]));


// function lastIndex(S) {
//         // code here
//         let index = -1;
//         for(let i = 0; i<S.length; i++){
//             if(S[i] === "1"){
//                 index = i;
//             }
//         }
//         return index;
// }
// console.log(lastIndex("000111"));


// function solution(arr,x){
// 	let  start = -1;
// 	let end = -1;
// 	for(let i = 0; i<arr.length; i++){
// 		if(arr[i] === x){
// 			start = i;
// 		}
// 	}
// 	for(let i = arr.length-1; i>=0; i--){
// 		if(arr[i] === x){
// 			end = i;
// 		}
// 	}
// 	let result = new Array();
// 	if(start === -1 && end === -1){
// 		result.push(-1);
// 	}
// 	else{
// 		result.push(start);
// 		result.push(end);
// 	}

// 	return result;
// }

// function isSubset(a, b) {
// 	let setA = new Set(a);
// 	for (let i = 0; i < b.length; i++) {
// 		if (!setA.has(b[i])) {
// 			return false;
// 		}
// 	}
// 	return true;
// }

// let a = [10, 5, 2, 23, 19]; let b = [19, 5, 3]
// console.log(isSubset(a,b));

// function middleElement(head){
// 	let fast = head;
// 	let slow = head;
// 	while(fast !== null && fast.next !== null){
// 		slow = slow.next;
// 		fast = fast.next.next;
// 	}
// 	return slow.val;
// }

// function reColors(s,k){
// 	let countW = 0;
// 	for(let i = 0; i<k; i++){
// 		if(s[i] === "W"){
// 			countW = countW + 1;
// 		}
// 	}
// 	let reColors = countW;
// 	for(let i = k; i<s.length; i++){
// 		if(s[i-k] === "W") countW = countW - 1;
// 		if(s[i] === "W") countW = countW + 1;
// 		reColors = Math.min(reColors,countW);
// 	}

// 	return reColors;
// }

// let s = "WBBWWBBWBW";
// console.log(reColors(s,7));


// class Solution {
//     // Function to find union of two sorted arrays using two pointers
//     findUnion(arr1, arr2, n, m) {
//         // Array to store union elements
//         let Union = [];

//         // Initialize pointers
//         let i = 0, j = 0;

//         // Iterate while both pointers are within array bounds
//         while (i < n && j < m) {
//             // If element in arr1 is smaller
//             if (arr1[i] < arr2[j]) {
//                 // Add if empty or not duplicate
//                 if (Union.length === 0 || Union[Union.length - 1] !== arr1[i])
//                     Union.push(arr1[i]);
//                 i++;
//             }
//             // If element in arr2 is smaller
//             else if (arr2[j] < arr1[i]) {
//                 // Add if empty or not duplicate
//                 if (Union.length === 0 || Union[Union.length - 1] !== arr2[j])
//                     Union.push(arr2[j]);
//                 j++;
//             }
//             else {
//                 // Elements are equal, add once if not duplicate
//                 if (Union.length === 0 || Union[Union.length - 1] !== arr1[i])
//                     Union.push(arr1[i]);
//                 i++;
//                 j++;
//             }
//         }

//         // Append remaining elements from arr1
//         while (i < n) {
//             if (Union.length === 0 || Union[Union.length - 1] !== arr1[i])
//                 Union.push(arr1[i]);
//             i++;
//         }

//         // Append remaining elements from arr2
//         while (j < m) {
//             if (Union.length === 0 || Union[Union.length - 1] !== arr2[j])
//                 Union.push(arr2[j]);
//             j++;
//         }

//         // Return the union array
//         return Union;
//     }
// }

// // Driver code
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr2 = [2, 3, 4, 4, 5, 11, 12];
// const n = arr1.length, m = arr2.length;

// const obj = new Solution();
// const result = obj.findUnion(arr1, arr2, n, m);
// console.log("Union of arr1 and arr2 is:", result.join(" "));


// function union(a,b){
// 	let res = new Array();
// 	let i = 0; let j = 0;
// 	let n = a.length; let m = b.length;

// 	let x = m + n;
// 	for(let k = 0; k<x; k++){
// 		if(a[k]<b[k]){
// 			res.push(a[k]);
// 		}
// 		else if(b[k]<a[k]){
// 			res.push(b[k]);
// 		}

// 	}
// }

// function unionSortedArrays(arr1, arr2) {
//     let i = 0, j = 0;
//     let result = [];

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
//                 result.push(arr1[i]);
//             }
//             i++;
//         } else if (arr2[j] < arr1[i]) {
//             if (result.length === 0 || result[result.length - 1] !== arr2[j]) {
//                 result.push(arr2[j]);
//             }
//             j++;
//         } else {
//             // equal elements
//             if (result.length === 0 || result[result.length - 1] !== arr1[i]) {
//                 result.push(arr1[i]);
//             }
//             i++;
//             j++;
//         }
//     }

//     // Add remaining elements
//     while (i < arr1.length) {
//         if (result[result.length - 1] !== arr1[i]) result.push(arr1[i]);
//         i++;
//     }
//     while (j < arr2.length) {
//         if (result[result.length - 1] !== arr2[j]) result.push(arr2[j]);
//         j++;
//     }

//     return result;
// }

// function union(a,b){
// 	let res = new Array();
// 	let i = 0; let j = 0;
// 	while(i<a.length && j<b.length){
// 		if(a[i]<b[j]){
// 			if(res.length === 0 || res[res.length-1] !== a[i]){
// 				res.push(a[i]);
// 			}
// 			i++;
// 		}
// 		if(b[j]<a[i]){
// 			if(res.length === 0 || res[res.length - 1] !== b[j]){
// 				res.push(b[j]);
// 			}
// 			j++;
// 		}
// 		if(a[i] === b[j]){
// 			if(res.length === 0 || res[res.length-1] !== a[i]){
// 				res.push(a[i]);
// 			}
// 			i++; j++;
// 		}
// 	}
// 	while(i<a.length){
// 		if(res[res.length-1] !== a[i]){
// 			res.push(a[i]);
// 		}
// 		i++;
// 	}
// 	while(j<b.length){
// 		if(res[res.length-1] !== b[i]){
// 			res.push(b[i]);
// 		}
// 		b++;
// 	}
// 	return res;
// }

// console.log(union([1,2,4,5,7], [2,3,5,6])); 

// function longestSubarraySumK(arr, K) {
//   let prefixSum = 0;
//   let maxLen = 0;
//   const map = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     prefixSum += arr[i];

//     if (prefixSum === K) {
//       maxLen = i + 1;
//     }





// SAMMED

//     if (map.has(prefixSum - K)) {
// 		let length = i-map.get(prefixSum-K);
//       maxLen = Math.max(maxLen, length);
//     }

//     if (!map.has(prefixSum)) {
//       map.set(prefixSum, i);
//     }
//   }

//   return maxLen;
// }

// // Example
// console.log(longestSubarraySumK([1, -1, 5, -2, 3], 3)); // Output: 4