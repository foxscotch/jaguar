"""UPC-E manipulation functions.

Adapted for Python from https://github.com/xbpf/gtin"""


def expand(upce: str):
    """Expand a UPC-E number to its proper full-length UPC-A."""

    digits = list(upce)
    number_system = digits.pop(0) if (len(digits) > 7) else ''
    check_digit = digits.pop() if (len(digits) > 6) else ''
    last_digit = digits.pop()

    expanded = None

    if last_digit in ('0', '1', '2'):
        expanded = ''.join(digits[0:2]) + last_digit + '0000' + ''.join(digits[2:5])
    elif last_digit in ('3', '4'):
        expanded = ''.join(digits[0:last_digit]) + '00000' + ''.join(digits[last_digit:5])
    elif last_digit in ('5', '6', '7', '8', '9'):
        expanded = ''.join(digits) + '0000' + last_digit

    return number_system + expanded + check_digit

def compress(upce: str):
    """TODO?: Expand a UPC-A number to its shortened UPC-E, if possible."""
    pass


if __name__ == '__main__':
    import sys
    expanded = expand(sys.argv[1] if len(sys.argv) > 1 else '07831504')
    print(expanded)
    print(compress(expanded))
