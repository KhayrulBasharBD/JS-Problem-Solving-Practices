document.write("<h2>Welcome to the Pattern Step-2 related Programs</h2>");
// 12345
// 1234
// 123
// 12
// 1
const pattern1=num=>
{
    for(let row=num; row>=1; row--)
    {
        for(let col=1; col<=row; col++)
        {
            document.write(col);
        }
        document.write('<br/>');
    }
};
pattern1(5)


// ABCDE
// ABCD
// ABC
// AB
// A
const pattern2=num=>
{
    for(let row=num; row>=1; row--)
    {
        for(let col=1; col<=row; col++)
        {
            document.write(String.fromCharCode(col+96).toUpperCase());
        }
        document.write('<br/>');
    }
};
pattern2(5)

// 1
// 12
// 123
// 1234
// 12345
// 1234
// 123
// 12
// 1
const pattern3=num=>
{
    for(let row=1; row<=num; row++)
    {
        for(let col=1; col<=row; col++)
        {
            document.write(col);
        }

        document.write('<br/>');
    }
    
    for(let row=num-1; row>=1; row--)
    {
        for(let col=1; col<=row; col++)
        {
            document.write(col);
        }
        document.write('<br/>');
    }
};
pattern3(5)


// ` ` ` `1
// ` ` `12
// ` `123
// `1234
// 12345
const pattern4=num=>
{
    for(let row=1; row<=num; row++)
    {
        for(let col=1; col<=num-row; col++)
        {
            document.write(' `');
        }
        for(let col=1; col<=row; col++)
        {
            document.write(col);
        }
        document.write('<br>');
    }
};
pattern4(5)