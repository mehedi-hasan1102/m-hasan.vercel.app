---
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fc5wnxbi9pd259i5c0978.jpeg
date: Aug 30, 2025
readTime: 4 min read
title: TypeScript Core Concepts Every Developer Should Know
category: TypeScript
description: Learn TypeScript core concepts and improve your JavaScript development skills.
---

TypeScript হলো JavaScript এর একটি strongly typed superset, যা আপনার কোডকে আরও নিরাপদ, পরিষ্কার এবং maintainable করে।
আপনি যদি বড় প্রোজেক্টে bug-free কোড লিখতে চান, TypeScript শেখা অবশ্যই দরকার! ✨

এই ব্লগে আমি আপনাকে TypeScript এর মূল কনসেপ্টস দেখাবো, step by step, উদাহরণসহ।

1️⃣ Basic Types (বেসিক টাইপস)

TypeScript কিছু built-in টাইপস দেয়:


`let isPublished: boolean = true;`
`let title: string = "TypeScript Basics";`
`let pages: number = 250;`



সাধারণ টাইপস:
`string, number, boolean, any, void`

💡 আপনার জন্য টিপস: any খুব বেশি ব্যবহার করবেন না, না হলে type safety হারাতে পারেন।

**2️⃣ Array এবং Tuple**

Array: একই ধরনের মানের সমষ্টি রাখে:

`let fruits: string[] = ["আপেল", "কলা"];`


Tuple: নির্দিষ্ট লেন্থ এবং টাইপের array:

`let bookInfo: [string, string] = ["The Alchemist", "Paulo Coelho"];`

Tuple ব্যবহার করলে TypeScript ভুল টাইপ ধরতে পারবে না। 

**3️⃣ Interface**

Interface দিয়ে object এর structure define করা যায়:

`interface Book {
  title: string;
  author: string;
  pages: number;
  published: boolean;
}`

`const myBook: Book = {
  title: "The Alchemist",
  author: "Paulo Coelho",
  pages: 208,
  published: true
};`

💡 আপনার জন্য টিপস: Interface বড় প্রোজেক্টে ব্যবহার করলে আপনার কোড clean এবং readable থাকে।

**4️⃣ Function এবং Parameter Types**

TypeScript ফাংশনের parameter এবং return value type enforce করে:

`function printBook(book: Book): void {
  console.log(`Title: ${book.title}`);
  console.log(`Author: ${book.author}`);
}`

Optional বা default parameter:

`function greet(name: string, greeting: string = "Hello"): string {
  return `${greeting}, ${name}!`;
}`

**5️⃣ Enum**

Enum দিয়ে named constant define করা যায়:

`enum Status {
  Draft,
  Published,
  Archived
}`

`let bookStatus: Status = Status.Published;`

Enums কোডকে readable করে এবং bug কমায়। 🛡️

**6️⃣ Union এবং Literal Types**

Union Types: একাধিক টাইপের মান গ্রহণ করতে পারে:

`let pageCount: number | string = 200;
pageCount = "unknown";`

Literal Types: নির্দিষ্ট মানের সীমাবদ্ধতা দেয়:

`let difficulty: "easy" | "medium" | "hard";
difficulty = "medium"; `

**7️⃣ Generics**

Generics দিয়ে reusable functions এবং components তৈরি করা যায়:

`function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}`

`let numbers = getArray<number>([1, 2, 3]);`
`let strings = getArray<string>(["a", "b", "c"]);`


💡 আপনার জন্য টিপস: Generics ব্যবহার করলে আপনার কোড flexible এবং clean থাকে।

**8️⃣ Type Alias**

Custom type define করার জন্য:

`type ID = string | number;`
`let userId: ID = 123;`

**9️⃣ Type Assertion**

কখনও কখনও আপনি TypeScript এর চেয়ে বেশি জানেন:

`let someValue: any = "Hello";`
`let strLength: number = (someValue as string).length;`

**🔟 Modules & Imports**

TypeScript ES6 modules support করে:

`// book.ts`
`export interface Book { title: string; author: string; }`

`// app.ts`
`import { Book } from "./book";`



Modules আপনার কোডকে organized রাখে, বিশেষ করে বড় প্রোজেক্টে। 📦

**উপসংহার**

TypeScript আপনার কোডকে নিরাপদ, পরিষ্কার এবং scalable করে।
Types, interfaces, generics এবং modules ভালোভাবে জানলে, আপনি robust এবং maintainable code লিখতে পারবেন।

💡 Pro Tips:

(1) `"strict": true tsconfig.json`
এ ব্যবহার করুন।
(2) ছোট প্রোজেক্টে TypeScript ব্যবহার করে অভ্যাস তৈরি করুন।
(3) React, Node.js বা Next.js এর সাথে TypeScript ব্যবহার করুন fullstack প্রোজেক্টের জন্য।

✨ আশা করি এই ব্লগটি আপনাকে TypeScript শেখার যাত্রায় সাহায্য করবে!