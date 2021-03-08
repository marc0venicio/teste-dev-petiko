<?php

class FileOwners
{
    public static function groupByOwners(array $files): array
    {
        $lista = [];

    foreach($files as $key => $value) {
        $lista[$value][] = $key;
    }

    return $lista;
    }
}

$files = array
(
    "Input.txt" => "Jose",
    "Code.py" => "Joao",
    "Output.txt" => "Jose",
    "Click.js" => "Maria",
    "Out.php" => "maria",

);
var_dump(FileOwners::groupByOwners($files));