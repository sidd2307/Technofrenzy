import codetostring from "../utils/codeToString";

export const carousalData = [
    {
        image: "https://images.idgesg.net/images/article/2020/05/sale_25313_primary_image_wide-100842650-large.jpg?auto=webp&quality=85,70",
        caption: "Ask Questions",
        description: "Ask your queries and doubts here and get instant answers from top Software developers around the world!"
    },
    {
        image: "https://aquitysolutions.in/wp-content/uploads/2021/11/medical-coder-sitting-next-to-computer.png",
        caption: "Help others by answering their queries",
        description: "Share your code samples and showcase your coding skills!"
    },
    {
        image: "https://media.istockphoto.com/photos/digitally-enhanced-shot-of-two-handsome-businessmen-working-in-the-picture-id1322205575?b=1&k=20&m=1322205575&s=170667a&w=0&h=CuVOvQv6qSFKhyUAKR_x72kGdYuESHumN0yILMpg_-I=",
        caption: "Upvote the best answers",
        description: "Upvote the answers which you like the best!"
    },
];

export const categoryTags = [
    {
        categoryName: 'React',
        categoryId: 'react'
    },
    {
        categoryName: 'Angular',
        categoryId: 'angular'
    },
    {
        categoryName: 'NodeJS',
        categoryId: 'nodejs'
    },
    {
        categoryName: 'Django',
        categoryId: 'django'
    },
    {
        categoryName: 'React-Native',
        categoryId: 'reactnative'
    },
]

export const questions = [
    {
        id: 1,
        datePosted: "06/24/2008",
        heading: "How does React work?",
        categoryName: "react",
        categoryNameFull: "ReactJS",
        description: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
        code: "int LinearSearch(int Array[], int searchValue)\n{\n    for (i=0; i<N; i++)\n    {\n        if (Array[i]==searchValue)\n            return i;\n    }\n    return -1;\n}",
        answers: [
            {
                author: "Siddheshwar Panda",
                explanation: `Ensure that your array is sorted since this is the crux of a binary search. Any indexed/random-access data structure can be binary searched. So when you say using "just an array", I would say arrays are the most basic/common data structure that a binary search is employed on. You can do it recursively (easiest) or iteratively. Time complexity of a binary search is O(log N) which is considerably faster than a linear search of checking each element at O(N). Here are some examples from Wikipedia: Binary Search Algorithm:`,
                codeexplanation: codetostring(`BinarySearch(A[0..N-1], value, low, high) {  
                    if (high < low)  
                        return -1 // not found  
                    mid = low + ((high - low) / 2) 
                    if (A[mid] > value)  
                        return BinarySearch(A, value, low, mid-1)  
                    else if (A[mid] < value)  
                        return BinarySearch(A, value, mid+1, high)  
                    else
                       return mid // found
                    }`),
                upvotes: 10,
                downvotes: 7
            },
            {
                author: "Siddheshwar Panda",
                explanation: `Ensure that your array is sorted since this is the crux of a binary search. Any indexed/random-access data structure can be binary searched. So when you say using "just an array", I would say arrays are the most basic/common data structure that a binary search is employed on. You can do it recursively (easiest) or iteratively. Time complexity of a binary search is O(log N) which is considerably faster than a linear search of checking each element at O(N). Here are some examples from Wikipedia: Binary Search Algorithm:`,
                codeexplanation: codetostring(`BinarySearch(A[0..N-1], value, low, high) {  
                    if (high < low)  
                        return -1 // not found  
                    mid = low + ((high - low) / 2) 
                    if (A[mid] > value)  
                        return BinarySearch(A, value, low, mid-1)  
                    else if (A[mid] < value)  
                        return BinarySearch(A, value, mid+1, high)  
                    else
                       return mid // found
                    }`),
                upvotes: 10,
                downvotes: 7
            },
        ]
    },
    {
        id: 2,
        datePosted: "06/24/2001",
        heading: "How does Angular work?",
        categoryName: "angular",
        categoryNameFull: "Angular",
        description: "Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.",
        code: codetostring(`int [] arr = {5,4,3,2,1}; // This is my array
        int min = 0;

        for(int i = 0;i<arr.length; i++)
    {
        //Assume first element is min
        min = i;//Selection sort algorithm says that find the minimum in the
        // array, but first element is not minimum.What's point here?
        for(int j = i + 1;j<arr.length; j++)
    {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        System.out.println(arr[i]);//I print the in ascending order 
    }
        }`),
        answers: [
            {
                author: "Siddheshwar Panda",
                explanation: `Ensure that your array is sorted since this is the crux of a binary search. Any indexed/random-access data structure can be binary searched. So when you say using "just an array", I would say arrays are the most basic/common data structure that a binary search is employed on. You can do it recursively (easiest) or iteratively. Time complexity of a binary search is O(log N) which is considerably faster than a linear search of checking each element at O(N). Here are some examples from Wikipedia: Binary Search Algorithm:`,
                codeexplanation: codetostring(`BinarySearch(A[0..N-1], value, low, high) {  
                    if (high < low)  
                        return -1 // not found  
                    mid = low + ((high - low) / 2) 
                    if (A[mid] > value)  
                        return BinarySearch(A, value, low, mid-1)  
                    else if (A[mid] < value)  
                        return BinarySearch(A, value, mid+1, high)  
                    else
                       return mid // found
                    }`),
                upvotes: 10,
                downvotes: 7
            },
            {
                author: "Siddheshwar Panda",
                explanation: `Ensure that your array is sorted since this is the crux of a binary search. Any indexed/random-access data structure can be binary searched. So when you say using "just an array", I would say arrays are the most basic/common data structure that a binary search is employed on. You can do it recursively (easiest) or iteratively. Time complexity of a binary search is O(log N) which is considerably faster than a linear search of checking each element at O(N). Here are some examples from Wikipedia: Binary Search Algorithm:`,
                codeexplanation: codetostring(`BinarySearch(A[0..N-1], value, low, high) {  
                    if (high < low)  
                        return -1 // not found  
                    mid = low + ((high - low) / 2) 
                    if (A[mid] > value)  
                        return BinarySearch(A, value, low, mid-1)  
                    else if (A[mid] < value)  
                        return BinarySearch(A, value, mid+1, high)  
                    else
                       return mid // found
                    }`),
                upvotes: 10,
                downvotes: 7
            },
        ]
    },
    {
        id: 3,
        datePosted: "06/26/2019",
        heading: "How does Django work?",
        categoryName: "django",
        categoryNameFull: "Django",
        description: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It’s free and open source.",
        code: codetostring(`from django.conf.urls import url
        from olcapp import views
        
        urlpatterns = [
            url(r'^$',views.get),
            url(r'^post/$',views.post),
            url(r'^show/([0-9]+)/$',views.getId),
            url(r'^update/([0-9]+)/$',views.update,name='update'),
            url(r'^delete/([0-9]+)/$',views.delete),
        ]`),
        answers: [
            {
                author: "Siddheshwar Panda",
                explanation: `Ensure that your array is sorted since this is the crux of a binary search. Any indexed/random-access data structure can be binary searched. So when you say using "just an array", I would say arrays are the most basic/common data structure that a binary search is employed on. You can do it recursively (easiest) or iteratively. Time complexity of a binary search is O(log N) which is considerably faster than a linear search of checking each element at O(N). Here are some examples from Wikipedia: Binary Search Algorithm:`,
                codeexplanation: codetostring(`BinarySearch(A[0..N-1], value, low, high) {  
                    if (high < low)  
                        return -1 // not found  
                    mid = low + ((high - low) / 2) 
                    if (A[mid] > value)  
                        return BinarySearch(A, value, low, mid-1)  
                    else if (A[mid] < value)  
                        return BinarySearch(A, value, mid+1, high)  
                    else
                       return mid // found
                    }`),
                upvotes: 10,
                downvotes: 7
            },
            {
                author: "Siddheshwar Panda",
                explanation: `Ensure that your array is sorted since this is the crux of a binary search. Any indexed/random-access data structure can be binary searched. So when you say using "just an array", I would say arrays are the most basic/common data structure that a binary search is employed on. You can do it recursively (easiest) or iteratively. Time complexity of a binary search is O(log N) which is considerably faster than a linear search of checking each element at O(N). Here are some examples from Wikipedia: Binary Search Algorithm:`,
                codeexplanation: codetostring(`BinarySearch(A[0..N-1], value, low, high) {  
                    if (high < low)  
                        return -1 // not found  
                    mid = low + ((high - low) / 2) 
                    if (A[mid] > value)  
                        return BinarySearch(A, value, low, mid-1)  
                    else if (A[mid] < value)  
                        return BinarySearch(A, value, mid+1, high)  
                    else
                       return mid // found
                    }`),
                upvotes: 10,
                downvotes: 7
            },
        ]
    },
    {
        id: 4,
        datePosted: "06/10/2022",
        heading: "How does NodeJS work?",
        categoryName: "nodejs",
        categoryNameFull: "NodeJS",
        description: "When you install a package using npm install <packagename>, the latest available version of the package is downloaded and put in the node_modules folder, and a corresponding entry is added to the package.json and package-lock.json files that are present in your current folder.",
        code: codetostring(`var express = require('express');
        var router = express.Router();
        
        router.route('/bears')
        
            // create a bear (accessed at POST http://localhost:8080/api/bears)
            .post(function(req, res) {
        
                var bear = new Bear();      // create a new instance of the Bear model
                bear.name = req.body.name;  // set the bears name (comes from the request)
        
                // save the bear and check for errors
                bear.save(function(err) {
                    if (err)
                        res.send(err);
        
                    res.json({ message: 'Bear created!' });
                });
        
            });
        module.exports = router;`),
        answers: [
            {
                author: "Siddheshwar Panda",
                explanation: `Ensure that your array is sorted since this is the crux of a binary search. Any indexed/random-access data structure can be binary searched. So when you say using "just an array", I would say arrays are the most basic/common data structure that a binary search is employed on. You can do it recursively (easiest) or iteratively. Time complexity of a binary search is O(log N) which is considerably faster than a linear search of checking each element at O(N). Here are some examples from Wikipedia: Binary Search Algorithm:`,
                codeexplanation: codetostring(`BinarySearch(A[0..N-1], value, low, high) {  
                    if (high < low)  
                        return -1 // not found  
                    mid = low + ((high - low) / 2) 
                    if (A[mid] > value)  
                        return BinarySearch(A, value, low, mid-1)  
                    else if (A[mid] < value)  
                        return BinarySearch(A, value, mid+1, high)  
                    else
                       return mid // found
                    }`),
                upvotes: 10,
                downvotes: 7
            },
            {
                author: "Siddheshwar Panda",
                explanation: `Ensure that your array is sorted since this is the crux of a binary search. Any indexed/random-access data structure can be binary searched. So when you say using "just an array", I would say arrays are the most basic/common data structure that a binary search is employed on. You can do it recursively (easiest) or iteratively. Time complexity of a binary search is O(log N) which is considerably faster than a linear search of checking each element at O(N). Here are some examples from Wikipedia: Binary Search Algorithm:`,
                codeexplanation: codetostring(`BinarySearch(A[0..N-1], value, low, high) {  
                    if (high < low)  
                        return -1 // not found  
                    mid = low + ((high - low) / 2) 
                    if (A[mid] > value)  
                        return BinarySearch(A, value, low, mid-1)  
                    else if (A[mid] < value)  
                        return BinarySearch(A, value, mid+1, high)  
                    else
                       return mid // found
                    }`),
                upvotes: 10,
                downvotes: 7
            },
        ]
    },
    {
        id: 5,
        datePosted: "06/24/2002",
        heading: "How does React-Native work?",
        categoryName: "reactnative",
        categoryNameFull: "React-Native",
        description: "If you are new to mobile development, the easiest way to get started is with Expo CLI. Expo is a set of tools built around React Native and, while it has many features, the most relevant feature for us right now is that it can get you writing a React Native app within minutes. You will only need a recent version of Node.js and a phone or emulator. If you'd like to try out React Native directly in your web browser before installing any tools, you can try out Snack.",
        code: codetostring(`function Form() {
            const { register, handleSubmit } = useForm();
            const [{ formType, profile }, profileDispatch] = useProfile();
          
            const buttonText = formType === 'Create' ? 'Create' : 'Edit';
          
            React.useEffect(() => {
              if(formType === 'Edit'){
                // populate input values
                ...
              }
            }, [formType])
          
            const onSubmit = data => {
              if (formType === 'Create') {
                addProfile(profileDispatch, data).catch(error => {
                  toast(error);
                })
              } else {
                updateProfile(profileDispatch, data).catch(error => {
                  toast(error);
                })
              }
            }
          
            return (
              <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} />
                <input {...register("age", { required: true })} />
                <button>{buttonText}</button>
              </form>
            )
          }`),
        answers: [
            {
                author: "Siddheshwar Panda",
                explanation: `Ensure that your array is sorted since this is the crux of a binary search. Any indexed/random-access data structure can be binary searched. So when you say using "just an array", I would say arrays are the most basic/common data structure that a binary search is employed on. You can do it recursively (easiest) or iteratively. Time complexity of a binary search is O(log N) which is considerably faster than a linear search of checking each element at O(N). Here are some examples from Wikipedia: Binary Search Algorithm:`,
                codeexplanation: codetostring(`BinarySearch(A[0..N-1], value, low, high) {  
                    if (high < low)  
                        return -1 // not found  
                    mid = low + ((high - low) / 2) 
                    if (A[mid] > value)  
                        return BinarySearch(A, value, low, mid-1)  
                    else if (A[mid] < value)  
                        return BinarySearch(A, value, mid+1, high)  
                    else
                       return mid // found
                    }`),
                upvotes: 10,
                downvotes: 7
            },
            {
                author: "Siddheshwar Panda",
                explanation: `Ensure that your array is sorted since this is the crux of a binary search. Any indexed/random-access data structure can be binary searched. So when you say using "just an array", I would say arrays are the most basic/common data structure that a binary search is employed on. You can do it recursively (easiest) or iteratively. Time complexity of a binary search is O(log N) which is considerably faster than a linear search of checking each element at O(N). Here are some examples from Wikipedia: Binary Search Algorithm:`,
                codeexplanation: codetostring(`BinarySearch(A[0..N-1], value, low, high) {  
                    if (high < low)  
                        return -1 // not found  
                    mid = low + ((high - low) / 2) 
                    if (A[mid] > value)  
                        return BinarySearch(A, value, low, mid-1)  
                    else if (A[mid] < value)  
                        return BinarySearch(A, value, mid+1, high)  
                    else
                       return mid // found
                    }`),
                upvotes: 10,
                downvotes: 7
            },
        ]
    },
    {
        id: 6,
        datePosted: "06/24/2008",
        heading: "How does NodeJE run a server?",
        categoryName: "nodejs",
        categoryNameFull: "NodeJS",
        description: "Node.js is a trademark of the OpenJS Foundation. Please review the Trademark List and Trademark Guidelines of the OpenJS Foundation.",
        code: codetostring(`async function getProfiles(dispatch) {
            dispatch({ type: 'LOADING_START' })
            try {
              const profiles = await client.getProfiles()
              dispatch({ type: 'LOADING_SUCCESS' })
              dispatch({ type: 'PROFILES_GET', payload: profiles })
            } catch (error) {
              dispatch({ type: 'LOADING_FAILED', payload: error })
              throw error;
            }
          }`),
        answers: [
            {
                author: "Siddheshwar Panda",
                explanation: `Ensure that your array is sorted since this is the crux of a binary search. Any indexed/random-access data structure can be binary searched. So when you say using "just an array", I would say arrays are the most basic/common data structure that a binary search is employed on. You can do it recursively (easiest) or iteratively. Time complexity of a binary search is O(log N) which is considerably faster than a linear search of checking each element at O(N). Here are some examples from Wikipedia: Binary Search Algorithm:`,
                codeexplanation: codetostring(`BinarySearch(A[0..N-1], value, low, high) {  
                    if (high < low)  
                        return -1 // not found  
                    mid = low + ((high - low) / 2) 
                    if (A[mid] > value)  
                        return BinarySearch(A, value, low, mid-1)  
                    else if (A[mid] < value)  
                        return BinarySearch(A, value, mid+1, high)  
                    else
                       return mid // found
                    }`),
                upvotes: 10,
                downvotes: 7
            },
            {
                author: "Siddheshwar Panda",
                explanation: `Ensure that your array is sorted since this is the crux of a binary search. Any indexed/random-access data structure can be binary searched. So when you say using "just an array", I would say arrays are the most basic/common data structure that a binary search is employed on. You can do it recursively (easiest) or iteratively. Time complexity of a binary search is O(log N) which is considerably faster than a linear search of checking each element at O(N). Here are some examples from Wikipedia: Binary Search Algorithm:`,
                codeexplanation: codetostring(`BinarySearch(A[0..N-1], value, low, high) {  
                    if (high < low)  
                        return -1 // not found  
                    mid = low + ((high - low) / 2) 
                    if (A[mid] > value)  
                        return BinarySearch(A, value, low, mid-1)  
                    else if (A[mid] < value)  
                        return BinarySearch(A, value, mid+1, high)  
                    else
                       return mid // found
                    }`),
                upvotes: 10,
                downvotes: 7
            },
        ]
    },
]