
The website I created has 3 pages.   Each page had a header with the title and links to the other pages.  There is a home page, a statistics page and a geo location page.  The geo page is where the client could look up their ideal price per night and estimated weekly income.  I first pulled the list of properties by neighbourhood, latitude and longitude, property type and price and placed them into a separate csv files, "location.csv".  I created another csv file, "prop_type.csv", with 22 different property types keys and a corresponding counter value.  The property types were chosen based on frequency. Properties listed as: boats, bungalows, cabins, campers, castles, lighthouse, or other were thrown out due to their low occurrences amongst the ~8000 entries.  I made a 3rd list, "neighbourhood.csv", of all the neighbourhoods and their minimum and maximum latitude and longitude.  The data was then used to create 2 html tables.  The csv files were all parsed to arrays in Javascript using the D3 library.  The arrays were created using d3.csvParse so that the first row of data was used as the column header.  I used a forEach loop to specify that the lat and long columns were numerical values.  In order to determine the ideal price, a while loop searched the array containing the neighbourhoods lat and long ranges.  Once the neighbourhood is found, nested for loops averaged the price for each property type.  The location itself would not have been specific enough, the listing contains many different types of properties which I decided was one of the most important factors in the pricing.  If the host knows what the average price of their property in their area, they can bring in more revenue by generating more listings by pricing theirs lower than the competitors.  The averages were then displayed on the html page in a table.  To find the estimated income, the averages were simply multiplied by 7.  Some neighbourhoods don't have a listing for every type of property, so if there is no data then the price is listed as not available.    For the statistics page, I created a bar graph comparing the maximum number of guests vs price per night.  As before, the data was pull from "listings.csv" and parsed with d3.csvParse.  The graph was created using svg.  I initialized the svg and defined its width and height to ensure it would be created before the script ran.  Maximum occupants was plotted on the x axis with price on the y.  The exact price is show on hover by a tool tip.  


Link to D3 library:
https://d3js.org/
