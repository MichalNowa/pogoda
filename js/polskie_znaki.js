export function usuwanie(wyraz)
{
    wyraz = wyraz.replace("ą","a");
    wyraz = wyraz.replace("Ą","A");
    wyraz = wyraz.replace("ó","o");
    wyraz = wyraz.replace("Ó","O");
    wyraz = wyraz.replace("ł","l");
    wyraz = wyraz.replace("Ł","L");
    wyraz = wyraz.replace("ń","n");
    wyraz = wyraz.replace("Ń","N");
    wyraz = wyraz.replace("ż","z");
    wyraz = wyraz.replace("Ż","Z");
    wyraz = wyraz.replace("ź","z");
    wyraz = wyraz.replace("Ź","Z");
    wyraz = wyraz.replace("Ć","C");
    wyraz = wyraz.replace("ć","c");
    wyraz = wyraz.replace("ę","e");
    wyraz = wyraz.replace("Ę","E");
    wyraz = wyraz.replace("Ś","S");
    wyraz = wyraz.replace("ś","s");
    return wyraz;
}