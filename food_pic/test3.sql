SELECT * 
FROM random_menu_menu m
JOIN random_menu_restaurant r
	ON r.Menuid = m.Menuid
WHERE m.MenuPrice > 100 AND m.MenuType = 'normal' AND r.RestaurantSeat > 1
ORDER BY RAND()
LIMIT 1	;