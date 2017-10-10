## Caesar Cipher

<p>This project shows an example of a Caesar Cipher and to break to it using brute force and letter frequency</p>
<p>File Structure Listed Below</p>
<pre>
caesar-cipher-master/  
  |_ rank/
       |_ dict.txt -> A simple list of common words in english
       |_ index.js -> The code to rank solutions and get the most likely solution out of an array of strings used for brute force
  |_ routes/
       |_ index.js -> Exports solutions
       |_ letterFreq.js -> Code that generates the shift and plain text by looking for the most frequent letter and assuming it is 'e'
       |_ bruteForce.js -> Code that generates all possible permutations of the cipher on a given string
  |_ app.js -> Examples of the code being used with print statements
  |_ cipher.js -> Base Caesar Cipher
</pre>
