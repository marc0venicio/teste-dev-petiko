<?php
class Palindrome
{
    public static function isPalindrome($word)
    {
        $word = strtolower ($word);
        if( $word == strrev($word) ) {
            return true;
        }
        else {
            return false;
        }
    }
}

echo Palindrome::isPalindrome('Deleveled');
var_dump(Palindrome::isPalindrome('Deleveled'));