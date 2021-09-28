Feature: Shopping Basket

  Scenario: Add items to shopping basket
    Given Client adds 2 units of item "The Hobbit"
    And Client adds 5 units of item "Breaking Bad"
    When Client prints shopping basket
    Then they should see
    """
      Basket creation date: 10/10/2021
      =============
       Item         | Quantity | Total
       The Hobbit   | 2        | £10
       Breaking Bad | 5        | £35
      =============
      Total = £45
    """

