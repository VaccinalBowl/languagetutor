open(COUNTRIES,"countries.csv") or die("$!");

while(<COUNTRIES>)
{
    if(/.*'(.*)'.*'(.*)'.*'(.*)'.*/)
    {
	
	print "$1,$2,$3\n";
    }
}
