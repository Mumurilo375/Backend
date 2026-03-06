# TODO: Relações entre Models

Marque com um `x` as relações já implementadas.

## Users
- [x] 1:N Users → Review
- [x] 1:N Users → ReviewVote
- [x] 1:N Users → CartItem
- [x] 1:N Users → Wishlist
- [x] 1:N Users → Order
- [x] 1:N Users → DeliveredKey

## Games
- [x] 1:N Games → GameImages
- [x] 1:N Games → Review
- [x] 1:N Games → Wishlist
- [x] 1:N Games → GamePlatformListing
- [x] N:N Games ↔ Category (via GameCategory)
- [x] N:N Games ↔ Tags (via GameTag)

## Platform
- [X] 1:N Platform → GamePlatformListing

## GamePlatformListing
- [x] N:1 GamePlatformListing → Games
- [x] N:1 GamePlatformListing → Platform
- [x] 1:N GamePlatformListing → GameKey
- [x] 1:N GamePlatformListing → CartItem
- [x] 1:N GamePlatformListing → OrderItem
- [x] N:N GamePlatformListing ↔ Promotion (via PromotionListing)

## GameKey
- [x] N:1 GameKey → GamePlatformListing
- [x] 1:0..1 GameKey → OrderItem
- [x] 1:0..1 GameKey → DeliveredKey

## GameImages
- [x] N:1 GameImages → Games

## Category
- [x] N:N Category ↔ Games (via GameCategory)
- [x] 1:N Category → GameCategory

## Tags
- [x] N:N Tags ↔ Games (via GameTag)
- [x] 1:N Tags → GameTag

## GameCategory
- [x] N:1 GameCategory → Games
- [x] N:1 GameCategory → Category

## GameTag
- [x] N:1 GameTag → Games
- [x] N:1 GameTag → Tags

## Review
- [x] N:1 Review → Games
- [x] N:1 Review → Users
- [x] 1:N Review → ReviewVote

## ReviewVote
- [x] N:1 ReviewVote → Review
- [x] N:1 ReviewVote → Users

## CartItem
- [x] N:1 CartItem → Users
- [x] N:1 CartItem → GamePlatformListing

## Wishlist
- [x] N:1 Wishlist → Users
- [x] N:1 Wishlist → Games

## Order
- [x] N:1 Order → Users
- [x] 1:N Order → OrderItem

## OrderItem
- [x] N:1 OrderItem → Order
- [x] N:1 OrderItem → GamePlatformListing
- [x] 0..1:1 OrderItem → GameKey
- [x] 1:0..1 OrderItem → DeliveredKey

## DeliveredKey
- [x] N:1 DeliveredKey → Users
- [x] 1:1 DeliveredKey → OrderItem
- [x] 1:1 DeliveredKey → GameKey

## Promotion
- [x] N:N Promotion ↔ GamePlatformListing (via PromotionListing)
- [x] 1:N Promotion → PromotionListing

## PromotionListing
- [x] N:1 PromotionListing → Promotion
- [x] N:1 PromotionListing → GamePlatformListing
